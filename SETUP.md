# As Multi - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure API Keys

Open `config/apiKeys.ts` and replace the placeholder values with your actual API credentials:

```typescript
export const amazonConfig: ApiConfig = {
  apiKey: 'YOUR_AMAZON_API_KEY_HERE',        // Replace this
  apiSecret: 'YOUR_AMAZON_API_SECRET_HERE',  // Replace this
  affiliateId: 'YOUR_AMAZON_AFFILIATE_ID_HERE', // Replace this
  baseUrl: 'https://webservices.amazon.com/paapi5',
};
```

Repeat for all platforms: Daraz, AliExpress, eBay, and Walmart.

### 3. Sign Up for Affiliate Programs

#### Amazon Associates
- URL: https://affiliate-program.amazon.com/
- API Docs: https://webservices.amazon.com/paapi5/documentation/

#### Daraz Affiliate
- URL: https://www.daraz.com.bd/affiliate/
- Contact support for API access

#### AliExpress Affiliate
- URL: https://portals.aliexpress.com/
- API Docs: https://developers.aliexpress.com/

#### eBay Partner Network
- URL: https://partnernetwork.ebay.com/
- API Docs: https://developer.ebay.com/

#### Walmart Affiliate
- URL: https://affiliates.walmart.com/
- API Docs: https://developer.walmart.com/

### 4. Implement API Calls

The placeholder API functions are located in `lib/api/`:
- `amazon.ts` - Amazon Product Advertising API
- `daraz.ts` - Daraz Affiliate API
- `aliexpress.ts` - AliExpress Affiliate API
- `ebay.ts` - eBay Browse API
- `walmart.ts` - Walmart Affiliate API

Replace the placeholder data with actual API calls using your credentials.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
```

### 7. Start Production Server

```bash
npm start
```

## Project Structure

```
/vercel/sandbox/
├── app/                    # Next.js pages
│   ├── about/             # About page
│   ├── categories/        # Categories page
│   ├── contact/           # Contact page
│   ├── disclaimer/        # Disclaimer page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── CategoryFilter.tsx
│   ├── ComparisonTool.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   └── SearchBar.tsx
├── config/               # Configuration
│   └── apiKeys.ts        # API credentials
├── lib/                  # Library code
│   ├── api/             # API integrations
│   │   ├── amazon.ts
│   │   ├── daraz.ts
│   │   ├── aliexpress.ts
│   │   ├── ebay.ts
│   │   ├── walmart.ts
│   │   └── index.ts
│   └── types.ts         # TypeScript types
└── public/              # Static assets
```

## Features

✅ Multi-platform product aggregation
✅ Real-time search functionality
✅ Product comparison tool (up to 4 products)
✅ Category filtering
✅ Responsive design (mobile, tablet, desktop)
✅ Premium black & royal blue theme
✅ SEO optimized
✅ Fast performance with Next.js 15

## Customization

### Change Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#4169E1',  // Royal Blue
    dark: '#2952CC',
    light: '#5B7FE8',
  },
  dark: {
    DEFAULT: '#000000',  // Black
    card: '#1F2937',
    hover: '#374151',
  }
}
```

### Add More Categories

Edit `lib/api/index.ts` in the `getCategories()` function:

```typescript
export function getCategories() {
  return [
    { id: 'all', name: 'All Categories', slug: 'all', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', slug: 'electronics', icon: '📱' },
    // Add more categories here
  ];
}
```

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

### API Issues
- Verify API keys are correctly configured in `config/apiKeys.ts`
- Check API documentation for each platform
- Ensure API endpoints are accessible

### Styling Issues
- Clear Tailwind cache: `rm -rf .next`
- Rebuild: `npm run build`

## Support

For questions or issues:
- Check the README.md file
- Visit the Contact page
- Open an issue on GitHub

## License

ISC
