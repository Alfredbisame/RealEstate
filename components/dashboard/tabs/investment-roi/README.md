# Investment ROI Tab Components

This directory contains modular components for the Investment ROI tab, providing comprehensive tools for real estate investors to analyze and track their return on investment.

## Components Overview

### Core Components

#### `InvestmentROIHeader`
- **Purpose**: Main header with gradient background and feature badges
- **Features**:
  - Gradient background from green to purple
  - Decorative background elements
  - ROI Calculator and Performance Metrics badges
  - Responsive design

#### `InvestmentROIStats`
- **Purpose**: Display key ROI metrics in a grid
- **Metrics**:
  - Average ROI across all properties
  - Total Investment capital deployed
  - Annual Return year-to-date
  - Cash-on-Cash actual cash return
- **Features**: Color-coded cards with hover animations

#### `InvestmentROIContent`
- **Purpose**: Tab navigation and view rendering
- **Views**: Calculator, Analytics, Comparison
- **Features**: Smooth tab transitions with gradient active state

### View Components

#### `ROICalculatorView`
- **Purpose**: Interactive ROI calculator for property investments
- **Calculations**:
  - Annual Cash Flow
  - Cash-on-Cash Return
  - Capitalization Rate (Cap Rate)
  - Total Return (including appreciation)
- **Features**:
  - Real-time calculations
  - Two-column layout (inputs and results)
  - Color-coded result cards
  - Icon-enhanced input fields

#### `ROIAnalyticsView`
- **Purpose**: Visualize investment performance
- **Features**:
  - Portfolio ROI trend chart (6-month area chart)
  - Property performance comparison with progress bars
  - Investment allocation breakdown by type
  - Key insights panel with actionable recommendations
- **Insights**:
  - Top performer identification
  - Growth tracking
  - Diversification analysis
  - Investment opportunities

#### `ROIComparisonView`
- **Purpose**: Compare ROI across multiple properties
- **Features**:
  - Sortable by Total ROI, Cash-on-Cash, or Cap Rate
  - Performance badges (Excellent, Good, Average)
  - Detailed property cards with metrics
  - Portfolio summary statistics
  - Top performer badge with award icon
- **Metrics per Property**:
  - Purchase price
  - Monthly rent
  - Annual cash flow
  - Property type
  - ROI breakdown

## Usage

```tsx
import InvestmentROITab from './investment-roi';

<InvestmentROITab user={currentUser} />
```

### Individual Components
```tsx
import { 
  InvestmentROIHeader, 
  InvestmentROIStats,
  ROICalculatorView 
} from './investment-roi';

<InvestmentROIHeader />
<InvestmentROIStats />
<ROICalculatorView />
```

## Features for Real Estate Investors

### ROI Calculator
- **Input Fields**:
  - Purchase Price
  - Down Payment
  - Monthly Rent
  - Monthly Expenses
  - Annual Appreciation Rate
- **Output Metrics**:
  - Annual and Monthly Cash Flow
  - Cash-on-Cash Return %
  - Capitalization Rate %
  - Total Return with Appreciation %

### Analytics Dashboard
- **Trend Analysis**: 6-month ROI performance tracking
- **Property Comparison**: Visual comparison of all properties
- **Allocation Breakdown**: Investment distribution by property type
- **Actionable Insights**: AI-generated investment recommendations

### Comparison Tool
- **Sorting**: Dynamic sorting by key metrics
- **Performance Ratings**: Automated performance classification
- **Detailed Metrics**: Comprehensive property-level analytics
- **Portfolio Overview**: Aggregate statistics across all investments

## Styling & Design

- **Gradient Backgrounds**: Green → Blue → Purple theme
- **Color Coding**:
  - Green: Cash flow and positive returns
  - Blue: Cash-on-cash metrics
  - Purple: Cap rate and valuation
  - Orange: Total returns and opportunities
- **Hover Effects**: Scale transitions and shadow enhancements
- **Dark Mode**: Full dark mode support throughout
- **Responsive**: Mobile-first responsive design

## Performance Metrics Explained

### Cash-on-Cash Return
Annual cash flow divided by total cash invested (down payment). Shows actual cash return on invested capital.

### Capitalization Rate (Cap Rate)
Net operating income divided by property value. Indicates property's potential return independent of financing.

### Total Return
Combines cash-on-cash return with property appreciation for comprehensive performance measurement.

### ROI (Return on Investment)
Overall investment performance including rental income, expenses, and property value appreciation.

## Future Enhancements

- **Historical Performance**: Multi-year ROI tracking
- **Market Benchmarking**: Compare against market averages
- **Scenario Analysis**: What-if calculators for different scenarios
- **Tax Implications**: Include tax benefits in ROI calculations
- **Export Reports**: Generate PDF investment reports
- **Mobile App Integration**: Sync with mobile tracking apps

## Dependencies

- **React**: Core framework
- **Lucide React**: Icons
- **Tailwind CSS**: Styling
- **ChartWidget**: Shared chart component
- **TypeScript**: Type safety
