// Edge-compatible Google Sheets integration using service account
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

async function getAccessToken() {
  if (!CLIENT_EMAIL || !PRIVATE_KEY) {
    throw new Error('Missing Google Sheets credentials');
  }

  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: CLIENT_EMAIL,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  // Simple JWT implementation for edge runtime
  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  
  const data = `${encodedHeader}.${encodedPayload}`;
  
  // Convert PEM to binary for crypto.subtle
  const pemHeader = '-----BEGIN PRIVATE KEY-----';
  const pemFooter = '-----END PRIVATE KEY-----';
  const pemContents = PRIVATE_KEY.substring(
    pemHeader.length,
    PRIVATE_KEY.length - pemFooter.length - 1
  ).replace(/\s/g, '');
  
  const binaryDer = atob(pemContents);
  const binaryDerArray = new Uint8Array(binaryDer.length);
  for (let i = 0; i < binaryDer.length; i++) {
    binaryDerArray[i] = binaryDer.charCodeAt(i);
  }
  
  // Import crypto key and sign
  const key = await crypto.subtle.importKey(
    'pkcs8',
    binaryDerArray.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(data));
  const signatureArray = new Uint8Array(signature);
  const binaryString = Array.from(signatureArray, byte => String.fromCharCode(byte)).join('');
  const encodedSignature = btoa(binaryString)
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  
  const jwt = `${data}.${encodedSignature}`;
  
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });
  
  const tokenData = await response.json();
  return tokenData.access_token;
}

export async function addToGoogleSheet(data: any, sheetName: string) {
  try {
    if (!SHEET_ID) {
      console.error('Missing GOOGLE_SHEET_ID');
      return { success: false, error: 'Missing sheet configuration' };
    }

    const accessToken = await getAccessToken();
    
    // Add timestamp and format data based on sheet type
    const timestamp = new Date().toISOString();
    let values: any[][];
    
    if (sheetName === 'Contact') {
      values = [[timestamp, data.name, data.email, data.message]];
    } else if (sheetName === 'Speakers') {
      values = [[
        timestamp, data.name, data.email, data.companyRole, data.linkedIn, data.github,
        data.talkTitle, data.abstract, data.keyTakeaways, data.demoDescription,
        data.targetAudience, data.experience, data.systemsBuilt, data.projectLinks,
        data.loomVideo, data.resourcesProvided, data.additionalInfo
      ]];
    } else if (sheetName === 'Sponsors') {
      values = [[
        timestamp, data.companyName, data.contactName, data.contactRole, data.email,
        data.website, data.description, 
        Array.isArray(data.goals) ? data.goals.join(', ') : data.goals,
        Array.isArray(data.partnershipTypes) ? data.partnershipTypes.join(', ') : data.partnershipTypes,
        data.budget, data.speakingTopic, data.speakingDemo, data.speakingAudience,
        data.timeline, data.additional
      ]];
    } else {
      values = [[timestamp, ...Object.values(data)]];
    }
    
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Google Sheets API error:', error);
      return { success: false, error: 'Failed to save to sheet' };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Google Sheets error:', error);
    return { success: false, error: 'Failed to save to sheet' };
  }
}

