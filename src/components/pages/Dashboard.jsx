import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { 
  FaBell, 
  FaEye, 
  FaEyeSlash, 
  FaPlus, 
  FaArrowUp, 
  FaArrowDown, 
  FaWallet, 
  FaChartPie, 
  FaBullseye, 
  FaGift,
  FaStar,
  FaFire,
  FaLeaf,
  FaCrown,
  FaHeart,
  FaThumbsUp,
  FaRocket,
  FaShoppingCart,
  FaCar,
  FaHome,
  FaUtensils,
  FaPhone,
  FaGamepad,
  FaTimes,
  FaBars,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaPiggyBank,
  FaCreditCard,
  FaHistory,
  FaFileInvoice,
  FaQuestionCircle
} from 'react-icons/fa';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [motivationIndex, setMotivationIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  
  // Mock user data with Nigerian context
  const userData = {
    firstName: 'Adebayo',
    lastName: 'Johnson',
    balance: 847250,
    totalIncome: 1200000,
    totalExpenses: 352750,
    savingsGoal: 2000000,
    currentSavings: 494500,
    streak: 7, // Days of tracking expenses
    level: 'Savings Ninja' // Gamification level
  };

  // Nigerian-specific spending categories with professional icons
  const spendingCategories = [
    { name: 'Food & Drinks', amount: 89500, icon: FaUtensils, color: 'bg-orange-500', percentage: 25 },
    { name: 'Transport', amount: 67200, icon: FaCar, color: 'bg-blue-500', percentage: 19 },
    { name: 'Data & Airtime', amount: 45800, icon: FaPhone, color: 'bg-green-500', percentage: 13 },
    { name: 'Rent & Bills', amount: 125000, icon: FaHome, color: 'bg-purple-500', percentage: 35 },
    { name: 'Entertainment', amount: 25250, icon: FaGamepad, color: 'bg-pink-500', percentage: 7 }
  ];

  // Recent transactions with Nigerian merchant names
  const recentTransactions = [
    { id: 1, type: 'expense', merchant: 'Shoprite', category: 'Food & Drinks', amount: 23500, time: '2 hours ago', icon: FaShoppingCart },
    { id: 2, type: 'income', merchant: 'Salary Credit', category: 'Income', amount: 400000, time: '1 day ago', icon: FaMoneyBillWave },
    { id: 3, type: 'expense', merchant: 'Uber', category: 'Transport', amount: 2800, time: '1 day ago', icon: FaCar },
    { id: 4, type: 'expense', merchant: 'MTN Airtime', category: 'Data & Airtime', amount: 5000, time: '2 days ago', icon: FaPhone },
    { id: 5, type: 'expense', merchant: 'Mr Biggs', category: 'Food & Drinks', amount: 4200, time: '3 days ago', icon: FaUtensils }
  ];

  // Motivational messages with Nigerian flair
  const motivationalMessages = [
    "You're doing great! Keep building that generational wealth!",
    "Small small na money! Your consistency is paying off!",
    "Omo, you're a savings champion! Keep it up!",
    "Your future self will thank you for this discipline!",
    "Money wey you save today go multiply tomorrow!"
  ];

  // Achievement badges
  const achievements = [
    { name: 'Budget Boss', icon: FaCrown, earned: true, description: 'Stayed under budget for 7 days' },
    { name: 'Savings Streak', icon: FaFire, earned: true, description: '7-day expense tracking' },
    { name: 'Local Spender', icon: FaHeart, earned: true, description: 'Supporting local businesses' },
    { name: 'Night Owl Saver', icon: FaStar, earned: false, description: 'Save money after 10 PM' }
  ];

  // Navigation items
  const navigationItems = [
    { name: 'Dashboard', icon: FaChartLine, path: '/dashboard', active: true },
    { name: 'Transactions', icon: FaHistory, path: '/transactions' },
    { name: 'Budgets', icon: FaBullseye, path: '/budgets' },
    { name: 'Savings', icon: FaPiggyBank, path: '/savings' },
    { name: 'Cards', icon: FaCreditCard, path: '/cards' },
    { name: 'Reports', icon: FaFileInvoice, path: '/reports' },
    { name: 'Settings', icon: FaCog, path: '/settings' }
  ];

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-graphite">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
            >
              <FaTimes className="text-neutral-muted-grey" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  // Sidebar Component
  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center space-x-3 p-6 border-b border-neutral-light-grey/50">
          <img src="/icon.png" alt="NairaTrack" className="w-8 h-8" />
          <span className="text-xl font-bold text-graphite">NairaTrack</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6">
          <div className="space-y-2 px-4">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active 
                    ? 'bg-emerald text-white shadow-lg' 
                    : 'text-neutral-muted-grey hover:bg-neutral-light-bg hover:text-graphite'
                }`}
              >
                <item.icon className="text-lg" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
        
        {/* User Profile */}
        <div className="p-4 border-t border-neutral-light-grey/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-neutral-light-bg transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald to-jade rounded-full flex items-center justify-center">
              <FaUser className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-graphite">{userData.firstName} {userData.lastName}</p>
              <p className="text-xs text-neutral-muted-grey">{userData.level}</p>
            </div>
            <FaSignOutAlt className="text-neutral-muted-grey hover:text-graphite transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    const motivationTimer = setInterval(() => {
      setMotivationIndex((prev) => (prev + 1) % motivationalMessages.length);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(motivationTimer);
    };
  }, [motivationalMessages.length]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const savingsPercentage = Math.round((userData.currentSavings / userData.savingsGoal) * 100);

  return (
    <div className="flex h-screen bg-gradient-to-br from-emerald/5 via-jade/10 to-gold/5">
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0 lg:ml-0">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-neutral-light-grey/50 px-4 lg:px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Mobile menu button */}
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors lg:hidden"
              >
                <FaBars className="text-neutral-muted-grey text-lg" />
              </button>
              
              <div>
                <h1 className="text-lg font-bold text-graphite">
                  {getGreeting()}, {userData.firstName}!
                </h1>
                <p className="text-xs text-neutral-muted-grey">
                  {currentTime.toLocaleDateString('en-NG', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Streak Badge */}
              <div className="hidden sm:flex items-center bg-gradient-to-r from-orange-100 to-red-100 px-3 py-2 rounded-full">
                <FaFire className="text-orange-500 text-sm mr-1" />
                <span className="text-xs font-bold text-orange-700">{userData.streak} day streak</span>
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 hover:bg-neutral-light-bg rounded-full transition-colors">
                <FaBell className="text-neutral-muted-grey text-lg" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Balance Card */}
            <div className="relative bg-gradient-to-br from-emerald to-jade rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-4 translate-y-4"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FaWallet className="text-white/80" />
                    <span className="text-white/80 text-sm">Total Balance</span>
                  </div>
                  <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    {showBalance ? <FaEyeSlash className="text-white/80" /> : <FaEye className="text-white/80" />}
                  </button>
                </div>
                
                <div className="mb-4">
                  <h2 className="text-2xl lg:text-4xl font-bold mb-1">
                    {showBalance ? formatCurrency(userData.balance) : '₦ • • • • • •'}
                  </h2>
                  <p className="text-white/80 text-sm flex items-center">
                    <span className="mr-2">Level:</span>
                    <FaCrown className="text-gold mr-1" />
                    <span className="font-semibold">{userData.level}</span>
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <Button 
                    variant="outline" 
                    size="small"
                    onClick={() => openModal('addMoney')}
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 flex items-center justify-center space-x-2 px-3 py-2"
                  >
                    <FaPlus className="text-sm" />
                    <span>Add Money</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="small"
                    onClick={() => openModal('send')}
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 flex items-center justify-center space-x-2 px-3 py-2"
                  >
                    <FaArrowUp className="text-sm" />
                    <span>Send</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="small"
                    onClick={() => openModal('invest')}
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 flex items-center justify-center space-x-2 px-3 py-2"
                  >
                    <FaChartPie className="text-sm" />
                    <span>Invest</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Motivational Banner */}
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-2xl p-4 border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <FaRocket className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-graphite">{motivationalMessages[motivationIndex]}</p>
                </div>
                <FaHeart className="text-pink-500 text-lg animate-pulse" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Income vs Expenses */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <h3 className="text-sm font-semibold text-neutral-muted-grey mb-4 flex items-center">
                  <FaArrowUp className="text-green-500 mr-2" />
                  This Month
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-muted-grey">Income</span>
                    <span className="text-sm font-bold text-green-600">+{formatCurrency(userData.totalIncome)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-muted-grey">Expenses</span>
                    <span className="text-sm font-bold text-red-600">-{formatCurrency(userData.totalExpenses)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-graphite">Net Income</span>
                      <span className="text-sm font-bold text-emerald">
                        +{formatCurrency(userData.totalIncome - userData.totalExpenses)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Goal */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <h3 className="text-sm font-semibold text-neutral-muted-grey mb-4 flex items-center">
                  <FaBullseye className="text-emerald mr-2" />
                  Savings Goal
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-muted-grey">Progress</span>
                    <span className="text-xs font-bold text-emerald">{savingsPercentage}%</span>
                  </div>
                  <div className="w-full bg-neutral-light-bg rounded-full h-3">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-emerald to-jade transition-all duration-500"
                      style={{ width: `${Math.min(savingsPercentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-neutral-muted-grey">
                      {formatCurrency(userData.currentSavings)} of {formatCurrency(userData.savingsGoal)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <h3 className="text-sm font-semibold text-neutral-muted-grey mb-4 flex items-center">
                  <FaGift className="text-gold mr-2" />
                  Achievements
                </h3>
                <div className="space-y-2">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${achievement.earned ? 'bg-green-50' : 'bg-neutral-light-bg'}`}>
                      <achievement.icon className={`text-lg ${achievement.earned ? 'text-green-600' : 'text-neutral-muted-grey'}`} />
                      <div className="flex-1">
                        <p className={`text-xs font-medium ${achievement.earned ? 'text-green-700' : 'text-neutral-muted-grey'}`}>
                          {achievement.name}
                        </p>
                      </div>
                      {achievement.earned && <FaThumbsUp className="text-green-500 text-xs" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spending Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-graphite">Spending Breakdown</h3>
                <div className="flex space-x-2">
                  {['week', 'month', 'year'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedPeriod === period 
                          ? 'bg-emerald text-white' 
                          : 'bg-neutral-light-bg text-neutral-muted-grey hover:bg-neutral-light-grey'
                      }`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {spendingCategories.map((category, index) => (
                  <div key={index} className="group hover:bg-neutral-light-bg/50 rounded-lg p-3 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform`}>
                        <category.icon className="text-lg" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-graphite">{category.name}</h4>
                          <span className="font-bold text-graphite">{formatCurrency(category.amount)}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 bg-neutral-light-bg rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${category.color} transition-all duration-500`}
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-neutral-muted-grey font-medium">{category.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-graphite">Recent Transactions</h3>
                <Link to="/transactions" className="text-emerald hover:text-jade text-sm font-medium">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center space-x-4 p-3 hover:bg-neutral-light-bg/50 rounded-lg transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gradient-to-br from-neutral-light-bg to-neutral-light-grey rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <transaction.icon className="text-neutral-muted-grey text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-graphite">{transaction.merchant}</h4>
                        <span className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-muted-grey">{transaction.category}</span>
                        <span className="text-xs text-neutral-muted-grey">{transaction.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Add Transaction */}
            <div className="bg-gradient-to-r from-emerald to-jade rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1">Track an Expense</h3>
                  <p className="text-white/80 text-sm">Keep your streak going! Add today's expenses</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => openModal('addTransaction')}
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30 flex items-center justify-center space-x-2 px-4 py-2"
                >
                  <FaPlus />
                  <span>Add Transaction</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Modals */}
      <Modal isOpen={activeModal === 'addMoney'} onClose={closeModal} title="Add Money">
        <div className="space-y-4">
          <p className="text-neutral-muted-grey">Choose how you'd like to add money to your account:</p>
          <div className="space-y-3">
            <Button fullWidth className="flex items-center justify-center space-x-2">
              <FaCreditCard />
              <span>Bank Transfer</span>
            </Button>
            <Button fullWidth variant="outline" className="flex items-center justify-center space-x-2">
              <FaPhone />
              <span>USSD Code</span>
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'send'} onClose={closeModal} title="Send Money">
        <div className="space-y-4">
          <p className="text-neutral-muted-grey">Send money to friends and family:</p>
          <div className="space-y-3">
            <Button fullWidth className="flex items-center justify-center space-x-2">
              <FaUser />
              <span>Send to Contact</span>
            </Button>
            <Button fullWidth variant="outline" className="flex items-center justify-center space-x-2">
              <FaPhone />
              <span>Send to Phone Number</span>
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'invest'} onClose={closeModal} title="Investment Options">
        <div className="space-y-4">
          <p className="text-neutral-muted-grey">Start your investment journey:</p>
          <div className="space-y-3">
            <Button fullWidth className="flex items-center justify-center space-x-2">
              <FaChartLine />
              <span>Mutual Funds</span>
            </Button>
            <Button fullWidth variant="outline" className="flex items-center justify-center space-x-2">
              <FaPiggyBank />
              <span>Fixed Savings</span>
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'addTransaction'} onClose={closeModal} title="Add Transaction">
        <div className="space-y-4">
          <p className="text-neutral-muted-grey">Record a new expense or income:</p>
          <div className="space-y-3">
            <Button fullWidth className="flex items-center justify-center space-x-2">
              <FaArrowDown />
              <span>Add Expense</span>
            </Button>
            <Button fullWidth variant="outline" className="flex items-center justify-center space-x-2">
              <FaArrowUp />
              <span>Add Income</span>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;