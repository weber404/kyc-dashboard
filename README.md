
# KYC Dashboard UI

A comprehensive Know Your Customer (KYC) dashboard built with Next.js 14, featuring real-time analytics, interactive charts, and responsive design.

## Features

- **Responsive Dashboard Layout** - Collapsible sidebar navigation with mobile-friendly design
- **Interactive Data Visualization** - Bar charts, donut charts, and progress indicators using Recharts
- **Real-time KYC Metrics** - Track new KYCs, modifications, and status changes with trend indicators
- **Advanced Filtering** - Time range selection (Today, This Month, Custom) with date picker
- **Status Tracking** - Monitor KYC applications across 6 different stages
- **Category Analytics** - Individual vs Non-Individual breakdowns with progress visualization
- **PAN Management** - Track solicited, received, consumed, and pending PANs

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

## Installation

1. **Clone or download the project**
   \`\`\`bash
   # If using git
   git clone <repository-url>
   cd kyc-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

## Running the Application

1. **Development mode**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Build for production**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── api/                    # API routes for mock data
│   │   └── dashboard/
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main dashboard page
├── components/
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── categories-section.tsx
│   │   ├── dashboard-content.tsx
│   │   ├── header.tsx
│   │   ├── kyc-chart.tsx
│   │   ├── metric-cards.tsx
│   │   ├── pan-stats.tsx
│   │   ├── sidebar.tsx
│   │   ├── solicited-section.tsx
│   │   └── status-cards.tsx
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   └── kyc-dashboard.tsx      # Main dashboard wrapper
└── lib/
    └── utils.ts               # Utility functions
\`\`\`

## Key Components

### Dashboard Layout
- **Sidebar**: Navigation menu with collapsible mobile view
- **Header**: Breadcrumbs, search, notifications, and user profile
- **Main Content**: Responsive grid layout for dashboard widgets

### Data Visualization
- **Metric Cards**: KYC counts with trend indicators (+/-%)
- **Bar Chart**: Individual vs Non-Individual comparison
- **Donut Chart**: PAN solicitation breakdown
- **Progress Bars**: Category-wise completion status

### Interactive Features
- **Time Filters**: Switch between Today, This Month, or Custom date ranges
- **Date Picker**: Calendar component for custom date selection
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Tab Navigation**: Switch between Individual and Non-Individual views

## Mock Data

The dashboard uses mock API routes (`/api/dashboard`) to simulate real KYC data:
- Total KYCs: 3,456
- New KYCs: 3,000 (+12%)
- Modified KYCs: 456 (-10%)
- Status breakdown across 6 categories
- Individual vs Non-Individual analytics
- PAN solicitation statistics

## Customization

### Adding New Metrics
1. Update the API route in `app/api/dashboard/route.ts`
2. Create new components in `components/dashboard/`
3. Add to the main dashboard layout

### Styling
- Modify Tailwind classes in components
- Update global styles in `app/globals.css`
- Customize shadcn/ui components in `components/ui/`

### Charts
- Chart configurations are in individual component files
- Uses Recharts library for all visualizations
- Responsive and accessible by default

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for demonstration purposes. Please check with your organization's policies before using in production.
