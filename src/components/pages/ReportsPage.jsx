import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaDownload,
  FaChartLine,
  FaChartPie,
  FaChartBar,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown,
  FaUtensils,
  FaCar,
  FaHome,
  FaPhone,
  FaGamepad,
  FaShoppingCart,
  FaFilter,
  FaEye,
  FaMoneyBillWave,
  FaBullseye,
  FaWallet,
  FaCreditCard,
  FaPiggyBank
} from 'react-icons/fa';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Area,
  AreaChart
} from 'recharts';

// CustomTooltip component outside of render
const CustomTooltip = ({ active, payload, label }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-neutral-light-grey rounded-lg shadow-lg">
        <p className="font-semibold text-graphite mb-2">{label}</p>
        {payload.map((pld, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: pld.color }}
            ></div>
            <span className="text-sm text-neutral-muted-grey">{pld.dataKey}:</span>
            <span className="text-sm font-semibold text-graphite">
              {formatCurrency(pld.value)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const ReportsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [reportType, setReportType] = useState('overview');

  // Mock data for charts
  const monthlySpendingData = [
    { month: 'Jan', income: 450000, expenses: 320000, savings: 130000 },
    { month: 'Feb', income: 480000, expenses: 290000, savings: 190000 },
    { month: 'Mar', income: 520000, expenses: 350000, savings: 170000 },
    { month: 'Apr', income: 450000, expenses: 380000, savings: 70000 },
    { month: 'May', income: 600000, expenses: 420000, savings: 180000 },
    { month: 'Jun', income: 550000, expenses: 390000, savings: 160000 },
    { month: 'Jul', income: 580000, expenses: 410000, savings: 170000 },
    { month: 'Aug', income: 520000, expenses: 375000, savings: 145000 },
    { month: 'Sep', income: 490000, expenses: 355000, savings: 135000 },
    { month: 'Oct', income: 510000, expenses: 385000, savings: 125000 },
    { month: 'Nov', income: 530000, expenses: 395000, savings: 135000 },
    { month: 'Dec', income: 620000, expenses: 450000, savings: 170000 }
  ];

  const categorySpendingData = [
    { name: 'Food & Drinks', value: 89500, color: '#f97316' },
    { name: 'Transport', value: 67200, color: '#3b82f6' },
    { name: 'Rent & Bills', value: 125000, color: '#8b5cf6' },
    { name: 'Data & Airtime', value: 45800, color: '#10b981' },
    { name: 'Entertainment', value: 25250, color: '#ec4899' },
    { name: 'Shopping', value: 34000, color: '#f59e0b' }
  ];

  const weeklyTrendData = [
    { week: 'Week 1', spending: 85000, budget: 100000 },
    { week: 'Week 2', spending: 92000, budget: 100000 },
    { week: 'Week 3', spending: 78000, budget: 100000 },
    { week: 'Week 4', spending: 105000, budget: 100000 }
  ];

  const incomeSourcesData = [
    { name: 'Salary', value: 450000, color: '#10b981' },
    { name: 'Freelance', value: 75000, color: '#3b82f6' },
    { name: 'Investments', value: 25000, color: '#8b5cf6' },
    { name: 'Other', value: 15000, color: '#f59e0b' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const calculateTotals = () => {
    const totalIncome = monthlySpendingData.reduce((sum, item) => sum + item.income, 0);
    const totalExpenses = monthlySpendingData.reduce((sum, item) => sum + item.expenses, 0);
    const totalSavings = monthlySpendingData.reduce((sum, item) => sum + item.savings, 0);
    
    return { totalIncome, totalExpenses, totalSavings };
  };

  const { totalIncome, totalExpenses, totalSavings } = calculateTotals();

  const periods = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' }
  ];

  const reportTypes = [
    { value: 'overview', label: 'Overview', icon: FaChartLine },
    { value: 'spending', label: 'Spending Analysis', icon: FaChartPie },
    { value: 'income', label: 'Income Trends', icon: FaArrowUp },
    { value: 'savings', label: 'Savings Report', icon: FaPiggyBank }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald/5 via-jade/10 to-gold/5">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-neutral-light-grey/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link 
                to="/dashboard" 
                className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
              >
                <FaArrowLeft className="text-neutral-muted-grey" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-graphite">Reports & Analytics</h1>
                <p className="text-sm text-neutral-muted-grey">
                  Insights into your financial patterns
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors">
                <FaDownload className="text-neutral-muted-grey" />
              </button>
              <button className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors">
                <FaFilter className="text-sm" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Controls */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Report Type Tabs */}
            <div className="flex flex-wrap gap-2">
              {reportTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setReportType(type.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    reportType === type.value
                      ? 'bg-emerald text-white'
                      : 'bg-neutral-light-bg text-neutral-muted-grey hover:bg-neutral-light-grey'
                  }`}
                >
                  <type.icon className="text-sm" />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
            
            {/* Period Selector */}
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-neutral-muted-grey" />
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Income</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(totalIncome)}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <FaArrowUp className="text-green-600 text-xs" />
                  <span className="text-xs text-green-600">+12.5%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <FaMoneyBillWave className="text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">{formatCurrency(totalExpenses)}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <FaArrowDown className="text-red-600 text-xs" />
                  <span className="text-xs text-red-600">-3.2%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <FaArrowUp className="text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Savings</p>
                <p className="text-2xl font-bold text-emerald">{formatCurrency(totalSavings)}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <FaArrowUp className="text-emerald text-xs" />
                  <span className="text-xs text-emerald">+8.7%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-emerald/10 rounded-2xl flex items-center justify-center">
                <FaPiggyBank className="text-emerald" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Savings Rate</p>
                <p className="text-2xl font-bold text-purple-600">
                  {((totalSavings / totalIncome) * 100).toFixed(1)}%
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  <FaArrowUp className="text-purple-600 text-xs" />
                  <span className="text-xs text-purple-600">+2.1%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <FaBullseye className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        {reportType === 'overview' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            {/* Income vs Expenses Trend */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <h3 className="text-lg font-bold text-graphite mb-6">Income vs Expenses Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlySpendingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `₦${(value / 1000)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="income" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="expenses" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <h3 className="text-lg font-bold text-graphite mb-6">Spending by Category</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categorySpendingData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={(entry) => `${entry.name}: ${formatCurrency(entry.value)}`}
                  >
                    {categorySpendingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Spending Analysis */}
        {reportType === 'spending' && (
          <div className="space-y-6">
            {/* Weekly Budget vs Actual */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <h3 className="text-lg font-bold text-graphite mb-6">Weekly Budget vs Actual Spending</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="week" stroke="#64748b" />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `₦${(value / 1000)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="budget" fill="#e5e7eb" name="Budget" />
                  <Bar dataKey="spending" fill="#ef4444" name="Actual Spending" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Category Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <h3 className="text-lg font-bold text-graphite mb-6">Category Spending Details</h3>
              <div className="space-y-4">
                {categorySpendingData.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <div>
                        <h4 className="font-semibold text-graphite">{category.name}</h4>
                        <p className="text-sm text-neutral-muted-grey">
                          {((category.value / categorySpendingData.reduce((sum, cat) => sum + cat.value, 0)) * 100).toFixed(1)}% of total spending
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-graphite">{formatCurrency(category.value)}</p>
                      <p className="text-sm text-green-600">↓ 5.2% vs last month</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Income Analysis */}
        {reportType === 'income' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <h3 className="text-lg font-bold text-graphite mb-6">Income Sources</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={incomeSourcesData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={(entry) => `${entry.name}: ${formatCurrency(entry.value)}`}
                  >
                    {incomeSourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <h3 className="text-lg font-bold text-graphite mb-6">Monthly Income Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlySpendingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `₦${(value / 1000)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Savings Report */}
        {reportType === 'savings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <h3 className="text-lg font-bold text-graphite mb-6">Savings Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlySpendingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `₦${(value / 1000)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="savings" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Savings Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <h4 className="font-semibold text-graphite mb-2">Average Monthly Savings</h4>
                <p className="text-2xl font-bold text-emerald">
                  {formatCurrency(totalSavings / 12)}
                </p>
                <p className="text-sm text-neutral-muted-grey">Based on yearly data</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <h4 className="font-semibold text-graphite mb-2">Best Saving Month</h4>
                <p className="text-2xl font-bold text-emerald">February</p>
                <p className="text-sm text-neutral-muted-grey">{formatCurrency(190000)} saved</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <h4 className="font-semibold text-graphite mb-2">Savings Goal Progress</h4>
                <p className="text-2xl font-bold text-emerald">73%</p>
                <p className="text-sm text-neutral-muted-grey">On track for annual goal</p>
              </div>
            </div>
          </div>
        )}

        {/* Insights & Recommendations */}
        <div className="bg-gradient-to-r from-emerald/10 to-jade/10 rounded-2xl p-6 border border-emerald/20 mt-6">
          <h3 className="font-semibold text-graphite mb-4 flex items-center space-x-2">
            <FaChartLine className="text-emerald" />
            <span>Financial Insights</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-muted-grey">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-graphite">Strong Savings Performance</p>
                <p>Your savings rate is above the recommended 20% benchmark</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-graphite">Food Spending Alert</p>
                <p>Food expenses are 15% higher than similar income brackets</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-graphite">Income Growth</p>
                <p>Your income has grown 12.5% compared to last year</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-graphite">Investment Opportunity</p>
                <p>Consider investing 30% of savings for better returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;