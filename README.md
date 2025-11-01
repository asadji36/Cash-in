# As Multi - Multi-Affiliate Shopping Platform

A modern, responsive multi-affiliate website that aggregates products from Amazon, Daraz, AliExpress, eBay, and Walmart. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Multi-Platform Integration**: Browse products from 5 major e-commerce platforms
- 🔍 **Smart Search**: Real-time search across all products
- 📊 **Product Comparison**: Compare up to 4 products side-by-side
- 🎨 **Premium Design**: Black background with royal blue accents
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed

## Pages

- **Home**: Featured products with search and category filtering
- **Categories**: Browse products by category
- **About**: Information about the platform
- **Contact**: Contact form and information
- **Disclaimer**: Affiliate disclosure and legal information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sandbox
```

2. Install dependencies:
```bash
npm install
```

3. Configure API keys:
   - Open `config/apiKeys.ts`
   - Replace placeholder values with your actual API credentials
   - See comments in the file for links to sign up for each platform's affiliate program

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the application for production:
```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## API Integration

The application includes placeholder API integrations for:

- **Amazon** (Product Advertising API)
- **Daraz** (Affiliate API)
- **AliExpress** (Affiliate API)
- **eBay** (Browse API)
- **Walmart** (Affiliate API)

### Setting Up API Keys

1. Sign up for each platform's affiliate program (links in `config/apiKeys.ts`)
2. Obtain API credentials
3. Update the configuration in `config/apiKeys.ts`
4. Implement actual API calls in `lib/api/*.ts` files

## Project Structure

```
/vercel/sandbox/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── categories/          # Categories page
│   ├── contact/             # Contact page
│   ├── disclaimer/          # Disclaimer page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── CategoryFilter.tsx   # Category filter component
│   ├── ComparisonTool.tsx   # Product comparison tool
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Header/navigation
│   ├── ProductCard.tsx      # Product card component
│   └── SearchBar.tsx        # Search bar component
├── config/                  # Configuration files
│   └── apiKeys.ts           # API key configuration
├── lib/                     # Library code
│   ├── api/                 # API integration
│   │   ├── aliexpress.ts    # AliExpress API
│   │   ├── amazon.ts        # Amazon API
│   │   ├── daraz.ts         # Daraz API
│   │   ├── ebay.ts          # eBay API
│   │   ├── index.ts         # API aggregator
│   │   └── walmart.ts       # Walmart API
│   └── types.ts             # TypeScript types
├── public/                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Colors

The theme uses a black background with royal blue accents. To customize colors, edit `tailwind.config.ts`:

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

### Adding More Platforms

1. Create a new API file in `lib/api/`
2. Add configuration in `config/apiKeys.ts`
3. Update the aggregator in `lib/api/index.ts`
4. Add platform color in `components/ProductCard.tsx`

## License

ISC

## Support

For questions or issues, please visit the [Contact](/contact) page or open an issue on GitHub.

## Disclaimer

This is an affiliate marketing platform. We earn commissions from qualifying purchases made through links on this site. See our [Disclaimer](/disclaimer) page for more information.
