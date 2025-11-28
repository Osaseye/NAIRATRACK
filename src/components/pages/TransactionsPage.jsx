import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaSearch, 
  FaFilter, 
  FaDownload, 
  FaPlus,
  FaShoppingCart,
  FaCar,
  FaHome,
  FaUtensils,
  FaPhone,
  FaGamepad,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown,
  FaEllipsisV,
  FaEdit,
  FaTrash,
  FaReceipt
} from 'react-icons/fa';

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Extended transactions data with Nigerian context
  const allTransactions = [
    { id: 1, type: 'expense', merchant: 'Shoprite Lagos', category: 'Food & Drinks', amount: 23500, date: '2024-01-15', time: '14:30', icon: FaShoppingCart, description: 'Weekly grocery shopping', location: 'Victoria Island' },
    { id: 2, type: 'income', merchant: 'Salary Credit - GTBank', category: 'Salary', amount: 450000, date: '2024-01-15', time: '09:00', icon: FaMoneyBillWave, description: 'Monthly salary payment', location: 'Bank Transfer' },
    { id: 3, type: 'expense', merchant: 'Uber Nigeria', category: 'Transport', amount: 2800, date: '2024-01-14', time: '18:45', icon: FaCar, description: 'Trip from Ikeja to VI', location: 'Lagos' },
    { id: 4, type: 'expense', merchant: 'MTN Nigeria', category: 'Data & Airtime', amount: 5000, date: '2024-01-14', time: '12:00', icon: FaPhone, description: '5GB Data Bundle', location: 'Online' },
    { id: 5, type: 'expense', merchant: 'Mr Biggs Surulere', category: 'Food & Drinks', amount: 4200, date: '2024-01-13', time: '13:15', icon: FaUtensils, description: 'Lunch meeting', location: 'Surulere' },
    { id: 6, type: 'income', merchant: 'Freelance Payment - Paystack', category: 'Freelance', amount: 75000, date: '2024-01-13', time: '16:20', icon: FaMoneyBillWave, description: 'Web design project', location: 'Online' },
    { id: 7, type: 'expense', merchant: 'DSTV Nigeria', category: 'Entertainment', amount: 8500, date: '2024-01-12', time: '10:30', icon: FaGamepad, description: 'Monthly subscription', location: 'Online' },
    { id: 8, type: 'expense', merchant: 'NEPA Bill - EKEDC', category: 'Rent & Bills', amount: 15000, date: '2024-01-12', time: '08:00', icon: FaHome, description: 'Electricity bill', location: 'Utility Payment' },
    { id: 9, type: 'expense', merchant: 'Dominos Pizza Lekki', category: 'Food & Drinks', amount: 12500, date: '2024-01-11', time: '20:00', icon: FaUtensils, description: 'Friday night dinner', location: 'Lekki Phase 1' },
    { id: 10, type: 'expense', merchant: 'Bolt Lagos', category: 'Transport', amount: 1500, date: '2024-01-11', time: '07:30', icon: FaCar, description: 'Morning commute', location: 'Lagos' },
    { id: 11, type: 'income', merchant: 'Dividend - Dangote Cement', category: 'Investment', amount: 25000, date: '2024-01-10', time: '11:00', icon: FaMoneyBillWave, description: 'Quarterly dividend', location: 'Investment' },
    { id: 12, type: 'expense', merchant: 'Airtel Nigeria', category: 'Data & Airtime', amount: 3000, date: '2024-01-10', time: '16:45', icon: FaPhone, description: '2GB Data top-up', location: 'Online' }
  ];

  const categories = [
    { name: 'All', value: 'all', color: 'bg-gray-500' },
    { name: 'Food & Drinks', value: 'Food & Drinks', color: 'bg-orange-500' },
    { name: 'Transport', value: 'Transport', color: 'bg-blue-500' },
    { name: 'Data & Airtime', value: 'Data & Airtime', color: 'bg-green-500' },
    { name: 'Rent & Bills', value: 'Rent & Bills', color: 'bg-purple-500' },
    { name: 'Entertainment', value: 'Entertainment', color: 'bg-pink-500' },
    { name: 'Income', value: 'income', color: 'bg-emerald' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NG', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };

  // Filter transactions based on search and filters
  const filteredTransactions = allTransactions.filter(transaction => {
    const matchesSearch = transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         transaction.category === selectedFilter ||
                         (selectedFilter === 'income' && transaction.type === 'income') ||
                         (selectedFilter === 'expense' && transaction.type === 'expense');
    
    return matchesSearch && matchesFilter;
  });

  // Group transactions by date
  const groupedTransactions = filteredTransactions.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  // Calculate totals
  const totalIncome = filteredTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpense = filteredTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

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
                <h1 className="text-xl font-bold text-graphite">Transactions</h1>
                <p className="text-sm text-neutral-muted-grey">
                  {filteredTransactions.length} transaction{filteredTransactions.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors">
                <FaDownload className="text-neutral-muted-grey" />
              </button>
              <button className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors">
                <FaPlus className="text-sm" />
                <span className="hidden sm:inline">Add Transaction</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Income</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(totalIncome)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <FaArrowDown className="text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">{formatCurrency(totalExpense)}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <FaArrowUp className="text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Net Income</p>
                <p className={`text-2xl font-bold ${totalIncome - totalExpense >= 0 ? 'text-emerald' : 'text-red-600'}`}>
                  {formatCurrency(totalIncome - totalExpense)}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                totalIncome - totalExpense >= 0 ? 'bg-emerald/10' : 'bg-red-100'
              }`}>
                <FaMoneyBillWave className={totalIncome - totalExpense >= 0 ? 'text-emerald' : 'text-red-600'} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey text-sm" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedFilter(category.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === category.value
                      ? 'bg-emerald text-white'
                      : 'bg-neutral-light-bg text-neutral-muted-grey hover:bg-neutral-light-grey'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-6">
          {Object.entries(groupedTransactions).map(([date, transactions]) => (
            <div key={date} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-light-grey/30">
                <h3 className="font-semibold text-graphite flex items-center space-x-2">
                  <FaCalendarAlt className="text-neutral-muted-grey text-sm" />
                  <span>{formatDate(date)}</span>
                </h3>
                <div className="text-sm text-neutral-muted-grey">
                  {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
                </div>
              </div>
              
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center space-x-4 p-3 hover:bg-neutral-light-bg/50 rounded-lg transition-colors cursor-pointer group">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${
                      transaction.type === 'income' ? 'bg-green-500' : 'bg-gradient-to-br from-neutral-light-bg to-neutral-light-grey'
                    }`}>
                      <transaction.icon className={`text-lg ${transaction.type === 'expense' ? 'text-neutral-muted-grey' : 'text-white'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-graphite group-hover:text-emerald transition-colors">
                          {transaction.merchant}
                        </h4>
                        <span className={`font-bold ${
                          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-neutral-muted-grey">
                          <span>{transaction.category}</span>
                          <span>•</span>
                          <span>{transaction.time}</span>
                          {transaction.location && (
                            <>
                              <span>•</span>
                              <span>{transaction.location}</span>
                            </>
                          )}
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-neutral-light-bg rounded transition-all">
                          <FaEllipsisV className="text-neutral-muted-grey text-xs" />
                        </button>
                      </div>
                      
                      {transaction.description && (
                        <p className="text-xs text-neutral-muted-grey mt-1">{transaction.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTransactions.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-neutral-light-grey/50">
            <div className="w-20 h-20 bg-neutral-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <FaReceipt className="text-neutral-muted-grey text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-graphite mb-2">No transactions found</h3>
            <p className="text-neutral-muted-grey mb-6">
              {searchTerm ? 'Try adjusting your search or filters' : 'Start by adding your first transaction'}
            </p>
            <button className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors mx-auto">
              <FaPlus className="text-sm" />
              <span>Add Transaction</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsPage;