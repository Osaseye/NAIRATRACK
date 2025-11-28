# NairaTrack - Personal Finance Management App

NairaTrack is a comprehensive personal finance management application built specifically for Nigerian users. It provides a modern, intuitive interface for managing finances, tracking expenses, setting budgets, managing savings goals, and handling virtual cards.

## Features

### 🏦 Financial Overview
- Real-time balance tracking
- Income and expense monitoring
- Interactive dashboard with Nigerian context
- Achievement system and gamification

### 💳 Virtual Card Management
- Create multiple virtual cards for different purposes
- Spending limits and controls
- Transaction monitoring
- Freeze/unfreeze cards instantly

### 💰 Budgeting & Savings
- Create category-based budgets
- Automated savings goals
- Nigerian-specific spending categories
- Progress tracking and notifications

### 📊 Reports & Analytics
- Comprehensive spending analysis
- Interactive charts and graphs
- Export capabilities
- Trend analysis

### 🔒 Security & Settings
- Bank-level security features
- Profile management
- Notification preferences
- Two-factor authentication

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom Nigerian brand colors
- **Icons**: React Icons
- **Charts**: Recharts for data visualization
- **Routing**: React Router DOM
- **Currency**: Nigerian Naira (₦) with proper formatting

## Design System

- **Primary Colors**: Emerald (#0A5D44), Jade (#1BA97C), Gold (#E5C48A)
- **Typography**: Modern font stack optimized for readability
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first design with desktop optimization

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Osaseye/NAIRATRACK.git
cd NAIRATRACK
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This application is configured for deployment on Vercel with optimized settings:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite framework
3. The `vercel.json` configuration handles routing and caching
4. Deploy with a single click!

## Nigerian Context Features

- **Currency**: All amounts displayed in Nigerian Naira (₦)
- **Phone Numbers**: Nigerian phone number formatting (+234)
- **Merchants**: Local Nigerian businesses and services
- **Banking**: Integration-ready for Nigerian banks (GTBank, FirstBank, etc.)
- **Categories**: Spending categories relevant to Nigerian lifestyle

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Nigerian fintech ecosystem for inspiration
- React and Vite communities for excellent tooling
- Tailwind CSS for the utility-first approach

---

Built with ❤️ for the Nigerian financial ecosystem
