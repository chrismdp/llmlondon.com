import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!SHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
  throw new Error('Missing required Google Sheets environment variables');
}

const serviceAccountAuth = new JWT({
  email: CLIENT_EMAIL,
  key: PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function addToGoogleSheet(data: any, sheetName: string) {
  try {
    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    
    // Map sheet names to the correct sheet based on the URLs you provided
    let sheet;
    switch (sheetName) {
      case 'Contact':
        sheet = doc.sheetsById[0]; // First sheet (gid=0)
        break;
      case 'Speakers':
        sheet = doc.sheetsById[1087532065]; // Speakers sheet
        break;
      case 'Sponsors':
        sheet = doc.sheetsById[1086197200]; // Sponsors sheet
        break;
      default:
        // Fallback to title-based lookup
        sheet = doc.sheetsByTitle[sheetName];
    }
    
    if (!sheet) {
      throw new Error(`Sheet not found: ${sheetName}`);
    }
    
    // Load headers, set them if they don't exist
    try {
      await sheet.loadHeaderRow();
      if (!sheet.headerValues || sheet.headerValues.length === 0) {
        throw new Error('No headers found');
      }
    } catch (error) {
      console.log('Setting up headers for', sheetName);
      const headers = getHeadersForSheet(sheetName);
      await sheet.setHeaderRow(headers);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await sheet.loadHeaderRow();
    }
    
    // Add timestamp and format arrays as comma-separated strings
    const rowData = {
      timestamp: new Date().toISOString(),
      ...Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(', ') : value
        ])
      )
    };
    
    await sheet.addRow(rowData);
    return { success: true };
  } catch (error) {
    console.error('Google Sheets error:', error);
    return { success: false, error: error.message };
  }
}

function getHeadersForSheet(sheetName: string): string[] {
  switch (sheetName) {
    case 'Contact':
      return ['timestamp', 'name', 'email', 'message'];
    case 'Speakers':
      return [
        'timestamp', 'name', 'email', 'companyRole', 'linkedIn', 'github',
        'talkTitle', 'abstract', 'keyTakeaways', 'demoDescription', 
        'targetAudience', 'experience', 'systemsBuilt', 'projectLinks',
        'loomVideo', 'resourcesProvided', 'additionalInfo'
      ];
    case 'Sponsors':
      return [
        'timestamp', 'companyName', 'contactName', 'contactRole', 'email',
        'website', 'description', 'goals', 'partnershipTypes', 'budget',
        'speakingTopic', 'speakingDemo', 'speakingAudience', 'timeline', 'additional'
      ];
    default:
      return ['timestamp', 'data'];
  }
}