# Profit Calculator Components

A comprehensive set of React components for calculating and analyzing project profitability in real estate and construction projects.

## Overview

The Profit Calculator provides real-time calculation of project costs, profit margins, and financial recommendations. It's designed for project managers, accountants, and property owners to quickly assess project viability and profitability.

## Features

- **Real-time Calculations**: Instant profit margin and cost analysis
- **Input Validation**: Ensures all inputs are valid numbers
- **Visual Feedback**: Color-coded results based on profitability
- **Smart Recommendations**: Context-aware suggestions for improvement
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Full dark mode compatibility
- **Accessibility**: ARIA labels and keyboard navigation

## Components

### Main Components

- **ProfitCalculator**: Main orchestrator component
- **ProfitHeader**: Header with title and status indicator
- **ProfitContent**: Content container with all sections

### Input Components

- **CostInput**: Individual cost input field with validation
- **CostInputs**: Container for all cost input fields

### Display Components

- **ResultsCard**: Individual result display card
- **CalculationResults**: Complete results section with status indicators
- **Recommendations**: Smart recommendations based on profit margin

## Usage

### Basic Usage

```tsx
import { ProfitCalculator } from './profit-calculator';

function Dashboard() {
  return (
    <div className="h-full">
      <ProfitCalculator />
    </div>
  );
}
```

### With Custom Initial Data

```tsx
import { ProfitCalculator } from './profit-calculator';

const initialData = {
  materials: 150000,
  labor: 95000,
  permits: 18000,
  clientBudget: 320000
};

function Dashboard() {
  return (
    <div className="h-full">
      <ProfitCalculator initialData={initialData} />
    </div>
  );
}
```

### Individual Components

```tsx
import { 
  ProfitHeader, 
  CostInputs, 
  CalculationResults, 
  Recommendations 
} from './profit-calculator';

function CustomCalculator() {
  const [data, setData] = useState(initialData);
  const calculations = calculateProfit(data);

  return (
    <div className="space-y-6">
      <ProfitHeader title="Custom Calculator" />
      <CostInputs {...data} onChange={setData} />
      <CalculationResults calculations={calculations} />
      <Recommendations profitMargin={calculations.profitMargin} />
    </div>
  );
}
```

## Types

### ProfitData
```tsx
interface ProfitData {
  materials: number;    // Materials cost in GHS
  labor: number;        // Labor cost in GHS
  permits: number;      // Permits cost in GHS
  clientBudget: number; // Total client budget in GHS
}
```

### ProfitCalculations
```tsx
interface ProfitCalculations {
  totalCosts: number;   // Sum of all costs
  grossProfit: number;  // Revenue minus costs
  profitMargin: number; // Profit as percentage of revenue
  netProfit: number;    // Final profit after deductions
}
```

## Utilities

### Calculation Functions

- `calculateProfit(data)`: Calculate all profit metrics
- `formatCurrency(amount)`: Format numbers as GHS currency
- `formatPercentage(value)`: Format numbers as percentages
- `getProfitColor(margin)`: Get color class based on profit margin
- `getProfitStats(calculations)`: Get detailed profit analysis

### Validation Functions

- `validateInput(value)`: Validate numeric input
- `getEfficiencyScore(calculations)`: Calculate efficiency score

## Styling

### Color Schemes

- **Green**: Excellent profit margin (20%+)
- **Blue**: Good profit margin (15-20%)
- **Orange**: Fair profit margin (10-15%)
- **Red**: Poor profit margin (<10%)

### Responsive Breakpoints

- **Mobile**: Single column layout
- **Tablet**: Two-column grid for inputs
- **Desktop**: Full three-column results display

## Accessibility

- All inputs have proper labels and ARIA attributes
- Color coding includes text alternatives
- Keyboard navigation support
- Screen reader friendly status messages
- High contrast mode support

## Performance

- Debounced input updates
- Memoized calculations
- Efficient re-renders
- Lazy loading of heavy computations

## Domain-Specific Features

### Real Estate Context

- **GHS Currency**: All amounts in Ghanaian Cedi
- **Construction Costs**: Materials, labor, and permits
- **Project Budgeting**: Client budget management
- **Profit Margins**: Industry-standard calculations

### Business Intelligence

- **Risk Assessment**: Automatic risk level calculation
- **Recommendations**: Context-aware suggestions
- **Efficiency Scoring**: Performance metrics
- **Trend Analysis**: Historical comparison support

## Error Handling

- Input validation with user feedback
- Graceful handling of invalid calculations
- Clear error messages
- Fallback values for edge cases

## Testing

### Mock Data

```tsx
import { mockProfitData, sampleProjects } from './profit-calculator/mockData';

// Use mock data for testing
const testData = mockProfitData;
const sampleProject = sampleProjects[0];
```

### Test Scenarios

- Valid input calculations
- Invalid input handling
- Edge case scenarios
- Responsive design testing
- Accessibility testing

## Future Enhancements

- **Historical Tracking**: Save and compare projects
- **Export Functionality**: PDF/Excel reports
- **Advanced Analytics**: Trend analysis and forecasting
- **Integration**: Connect with accounting systems
- **Multi-currency**: Support for different currencies
- **Templates**: Pre-built project templates 