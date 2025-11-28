import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaPlus, 
  FaEdit, 
  FaTrash,
  FaBullseye,
  FaUtensils,
  FaCar,
  FaHome,
  FaPhone,
  FaGamepad,
  FaShoppingBag,
  FaMedkit,
  FaGraduationCap,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartPie,
  FaCalendarAlt
} from 'react-icons/fa';

// CreateBudgetModal component
const CreateBudgetModal = ({ showCreateBudget, setShowCreateBudget, budgetCategories }) => {
  if (!showCreateBudget) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-graphite">Create New Budget</h3>
          <button 
            onClick={() => setShowCreateBudget(false)}
            className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-graphite mb-2">Category</label>
            <div className="grid grid-cols-2 gap-2">
              {budgetCategories.map((category) => (
                <button
                  key={category.name}
                  className="flex items-center space-x-2 p-3 border border-neutral-light-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
                >
                  <div className={`w-6 h-6 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                    <category.icon className="text-xs" />
                  </div>
                  <span className="text-sm font-medium text-graphite">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-graphite mb-2">Budget Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey">₦</span>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-graphite mb-2">Period</label>
            <select className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors">
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
              <option value="year">Yearly</option>
            </select>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              onClick={() => setShowCreateBudget(false)}
              className="flex-1 px-4 py-3 border border-neutral-light-grey text-neutral-muted-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 bg-emerald hover:bg-emerald/90 text-white px-4 py-3 rounded-lg transition-colors">
              Create Budget
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BudgetsPage = () => {
  const [showCreateBudget, setShowCreateBudget] = useState(false);

  // Mock budget data with Nigerian context
  const budgets = [
    {
      id: 1,
      category: 'Food & Drinks',
      icon: FaUtensils,
      color: 'bg-orange-500',
      allocated: 150000,
      spent: 89500,
      remaining: 60500,
      period: 'month',
      status: 'on-track',
      transactions: 24,
      lastTransaction: 'Shoprite Lagos - ₦23,500'
    },
    {
      id: 2,
      category: 'Transport',
      icon: FaCar,
      color: 'bg-blue-500',
      allocated: 80000,
      spent: 67200,
      remaining: 12800,
      period: 'month',
      status: 'warning',
      transactions: 18,
      lastTransaction: 'Uber Nigeria - ₦2,800'
    },
    {
      id: 3,
      category: 'Data & Airtime',
      icon: FaPhone,
      color: 'bg-green-500',
      allocated: 25000,
      spent: 18000,
      remaining: 7000,
      period: 'month',
      status: 'on-track',
      transactions: 6,
      lastTransaction: 'MTN 5GB Bundle - ₦5,000'
    },
    {
      id: 4,
      category: 'Entertainment',
      icon: FaGamepad,
      color: 'bg-pink-500',
      allocated: 30000,
      spent: 35000,
      remaining: -5000,
      period: 'month',
      status: 'exceeded',
      transactions: 8,
      lastTransaction: 'Netflix Subscription - ₦8,500'
    },
    {
      id: 5,
      category: 'Shopping',
      icon: FaShoppingBag,
      color: 'bg-purple-500',
      allocated: 100000,
      spent: 45000,
      remaining: 55000,
      period: 'month',
      status: 'on-track',
      transactions: 12,
      lastTransaction: 'Jumia Fashion - ₦15,000'
    }
  ];

  const budgetCategories = [
    { name: 'Food & Drinks', icon: FaUtensils, color: 'bg-orange-500' },
    { name: 'Transport', icon: FaCar, color: 'bg-blue-500' },
    { name: 'Data & Airtime', icon: FaPhone, color: 'bg-green-500' },
    { name: 'Rent & Bills', icon: FaHome, color: 'bg-purple-500' },
    { name: 'Entertainment', icon: FaGamepad, color: 'bg-pink-500' },
    { name: 'Shopping', icon: FaShoppingBag, color: 'bg-indigo-500' },
    { name: 'Healthcare', icon: FaMedkit, color: 'bg-red-500' },
    { name: 'Education', icon: FaGraduationCap, color: 'bg-yellow-500' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'on-track':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'exceeded':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-neutral-muted-grey bg-neutral-light-bg';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'on-track':
        return <FaCheckCircle className="text-green-600" />;
      case 'warning':
      case 'exceeded':
        return <FaExclamationTriangle className="text-yellow-600" />;
      default:
        return <FaBullseye className="text-neutral-muted-grey" />;
    }
  };

  const getProgressPercentage = (spent, allocated) => {
    return Math.min((spent / allocated) * 100, 100);
  };

  const getProgressBarColor = (spent, allocated) => {
    const percentage = (spent / allocated) * 100;
    if (percentage <= 60) return 'bg-green-500';
    if (percentage <= 85) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const totalAllocated = budgets.reduce((sum, budget) => sum + budget.allocated, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const totalRemaining = totalAllocated - totalSpent;

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
                <h1 className="text-xl font-bold text-graphite">Budgets</h1>
                <p className="text-sm text-neutral-muted-grey">
                  Manage your spending limits
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowCreateBudget(true)}
              className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
            >
              <FaPlus className="text-sm" />
              <span className="hidden sm:inline">Create Budget</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Budgeted</p>
                <p className="text-2xl font-bold text-graphite">{formatCurrency(totalAllocated)}</p>
              </div>
              <div className="w-12 h-12 bg-emerald/10 rounded-2xl flex items-center justify-center">
                <FaBullseye className="text-emerald" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Spent</p>
                <p className="text-2xl font-bold text-red-600">{formatCurrency(totalSpent)}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <FaChartPie className="text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Remaining</p>
                <p className={`text-2xl font-bold ${totalRemaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(Math.abs(totalRemaining))}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                totalRemaining >= 0 ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <FaCalendarAlt className={totalRemaining >= 0 ? 'text-green-600' : 'text-red-600'} />
              </div>
            </div>
          </div>
        </div>

        {/* Budget Progress Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-graphite">Overall Progress</h3>
            <div className="text-sm text-neutral-muted-grey">
              {((totalSpent / totalAllocated) * 100).toFixed(1)}% of budget used
            </div>
          </div>
          
          <div className="w-full bg-neutral-light-bg rounded-full h-4 mb-2">
            <div 
              className={`h-4 rounded-full transition-all duration-500 ${getProgressBarColor(totalSpent, totalAllocated)}`}
              style={{ width: `${Math.min((totalSpent / totalAllocated) * 100, 100)}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm text-neutral-muted-grey">
            <span>{formatCurrency(totalSpent)} spent</span>
            <span>{formatCurrency(totalAllocated)} budgeted</span>
          </div>
        </div>

        {/* Budget List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {budgets.map((budget) => (
            <div key={budget.id} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${budget.color} rounded-2xl flex items-center justify-center text-white`}>
                    <budget.icon className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-graphite">{budget.category}</h4>
                    <p className="text-sm text-neutral-muted-grey">{budget.transactions} transactions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(budget.status)}`}>
                    {getStatusIcon(budget.status)}
                    <span className="capitalize">{budget.status === 'on-track' ? 'On Track' : budget.status}</span>
                  </div>
                  <button className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors">
                    <FaEdit className="text-neutral-muted-grey text-sm" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-muted-grey">Spent</span>
                  <span className="font-semibold text-graphite">{formatCurrency(budget.spent)}</span>
                </div>
                
                <div className="w-full bg-neutral-light-bg rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${getProgressBarColor(budget.spent, budget.allocated)}`}
                    style={{ width: `${getProgressPercentage(budget.spent, budget.allocated)}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-muted-grey">Remaining</span>
                  <span className={`font-semibold ${budget.remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {budget.remaining >= 0 ? formatCurrency(budget.remaining) : `${formatCurrency(Math.abs(budget.remaining))} over`}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-neutral-light-grey/30">
                  <span className="text-sm text-neutral-muted-grey">Budget</span>
                  <span className="font-semibold text-graphite">{formatCurrency(budget.allocated)}</span>
                </div>
                
                {budget.lastTransaction && (
                  <div className="text-xs text-neutral-muted-grey">
                    Last: {budget.lastTransaction}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for no budgets */}
        {budgets.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-neutral-light-grey/50">
            <div className="w-20 h-20 bg-neutral-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBullseye className="text-neutral-muted-grey text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-graphite mb-2">No budgets yet</h3>
            <p className="text-neutral-muted-grey mb-6">
              Create your first budget to start tracking your spending
            </p>
            <button 
              onClick={() => setShowCreateBudget(true)}
              className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors mx-auto"
            >
              <FaPlus className="text-sm" />
              <span>Create Budget</span>
            </button>
          </div>
        )}

        {/* Budget Tips */}
        <div className="mt-8 bg-gradient-to-r from-emerald/10 to-jade/10 rounded-2xl p-6 border border-emerald/20">
          <h3 className="font-semibold text-graphite mb-3 flex items-center space-x-2">
            <FaBullseye className="text-emerald" />
            <span>Budget Tips</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-muted-grey">
            <div>
              • Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings
            </div>
            <div>
              • Review and adjust your budgets monthly
            </div>
            <div>
              • Track small expenses - they add up quickly
            </div>
            <div>
              • Set realistic goals to avoid budget fatigue
            </div>
          </div>
        </div>
      </div>

      {/* Create Budget Modal */}
      <CreateBudgetModal 
        showCreateBudget={showCreateBudget} 
        setShowCreateBudget={setShowCreateBudget} 
        budgetCategories={budgetCategories} 
      />
    </div>
  );
};

export default BudgetsPage;