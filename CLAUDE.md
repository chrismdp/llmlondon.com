# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Install dependencies
pnpm install

# Development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Architecture Overview

This is a Next.js 14 application for the LLM London community website, using:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens (primary: navy blue #0a2740, accent: gold #c89a5b, background: off-white #f9f8f6)
- **Language**: TypeScript with strict mode enabled
- **Forms**: react-hook-form for form handling
- **Analytics**: PostHog for product analytics
- **Animations**: Framer Motion for interactive elements

## Key Architecture Patterns

### Route Structure
- App Router pattern with pages in `app/` directory
- API routes in `app/api/` for backend functionality
- Dynamic imports for client-side components (e.g., EventsPreview)

### API Integration
- Events API (`app/api/events/route.ts`) scrapes event data from https://lu.ma/llmlondon
- Attempts to parse JSON-LD structured data and HTML for event information
- Falls back to realistic sample events based on actual LLM London events
- Includes host LinkedIn profile mapping for team members (Chris Parsons, Oli Guei, Terry Lurie, Harpal Khing)
- All API routes have 10-minute caching headers
- Contact, speaker applications, and sponsor inquiries have dedicated API routes

### Component Organisation
- Shared components in `components/` directory
- Event-related components (EventCard, EventsList, FilteredEventsList) handle event display
- Layout components (Header, Footer) provide consistent site structure
- Hero, ValueProps, and TargetAudience components for landing page sections

### Environment Variables
- Copy `.env.example` to `.env.local` and fill in the Google Sheets credentials
- Required for contact form submissions to work properly

#### Google Sheets Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Create a service account with Sheets API access
5. Download the JSON key file
6. Share your Google Sheet with the service account email
7. Extract the required values for your `.env.local`:
   - `GOOGLE_SHEET_ID` - from the Google Sheets URL
   - `GOOGLE_CLIENT_EMAIL` - from the JSON key file
   - `GOOGLE_PRIVATE_KEY` - from the JSON key file (keep the quotes and newlines)

## Development Notes

- The site uses British English throughout (colour, organisation, etc.)
- No test framework is currently configured
- Images are served from `/public/` with external domains configured in `next.config.js`
- TypeScript path alias `@/*` maps to `./src/*` (though src/ directory is not currently used)