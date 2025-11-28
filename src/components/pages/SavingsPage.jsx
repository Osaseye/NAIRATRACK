import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaPlus, 
  FaPiggyBank,
  FaBullseye,
  FaChartLine,
  FaTrophy,
  FaGift,
  FaHome,
  FaCar,
  FaGraduationCap,
  FaUmbrella,
  FaHeart,
  FaRocket,
  FaFire,
  FaCalendarAlt,
  FaEdit,
  FaPlay,
  FaPause,
  FaCheck,
  FaLock,
  FaUnlock,
  FaStar
} from 'react-icons/fa';

// CreateGoalModal component
const CreateGoalModal = ({ showCreateGoal, setShowCreateGoal, formatCurrency }) => {
  if (!showCreateGoal) return null;

  const goalTemplates = [
    { name: 'Emergency Fund', icon: FaUmbrella, color: 'bg-blue-500', target: 2000000 },
    { name: 'New Car', icon: FaCar, color: 'bg-green-500', target: 8000000 },
    { name: 'House Fund', icon: FaHome, color: 'bg-purple-500', target: 15000000 },
    { name: 'Vacation', icon: FaRocket, color: 'bg-pink-500', target: 500000 },
    { name: 'Education', icon: FaGraduationCap, color: 'bg-yellow-500', target: 3000000 },
    { name: 'Wedding', icon: FaHeart, color: 'bg-red-500', target: 5000000 }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-graphite">Create Savings Goal</h3>
          <button 
            onClick={() => setShowCreateGoal(false)}
            className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-graphite mb-3">Choose a template</label>
            <div className="grid grid-cols-2 gap-3">
              {goalTemplates.map((template) => (
                <button
                  key={template.name}
                  className="flex flex-col items-center p-3 border border-neutral-light-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
                >
                  <div className={`w-10 h-10 ${template.color} rounded-2xl flex items-center justify-center text-white mb-2`}>
                    <template.icon className="text-lg" />
                  </div>
                  <span className="text-sm font-medium text-graphite text-center">{template.name}</span>
                  <span className="text-xs text-neutral-muted-grey">{formatCurrency(template.target)}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Goal Name</label>
              <input
                type="text"
                placeholder="e.g., Emergency Fund"
                className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Target Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey">₦</span>
                <input
                  type="number"
                  placeholder="Enter target amount"
                  className="w-full pl-8 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Monthly Contribution</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey">₦</span>
                <input
                  type="number"
                  placeholder="Enter monthly amount"
                  className="w-full pl-8 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Target Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
              />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-neutral-light-bg rounded-lg">
              <div>
                <p className="font-medium text-graphite">Enable Auto-Save</p>
                <p className="text-sm text-neutral-muted-grey">Automatically transfer money monthly</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald"></div>
              </label>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => setShowCreateGoal(false)}
              className="flex-1 px-4 py-3 border border-neutral-light-grey text-neutral-muted-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 bg-emerald hover:bg-emerald/90 text-white px-4 py-3 rounded-lg transition-colors">
              Create Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SavingsPage = () => {
  const [selectedTab, setSelectedTab] = useState('goals');
  const [showCreateGoal, setShowCreateGoal] = useState(false);

  // Mock savings goals with Nigerian context
  const savingsGoals = [
    {
      id: 1,
      title: 'Emergency Fund',
      description: '6 months of expenses for financial security',
      targetAmount: 2000000,
      currentAmount: 850000,
      monthlyTarget: 200000,
      deadline: '2024-12-31',
      status: 'active',
      icon: FaUmbrella,
      color: 'bg-blue-500',
      priority: 'high',
      autoSave: true,
      streak: 5
    },
    {
      id: 2,
      title: 'New Car Fund',
      description: 'Toyota Corolla 2020 model',
      targetAmount: 8500000,
      currentAmount: 2400000,
      monthlyTarget: 400000,
      deadline: '2024-10-31',
      status: 'active',
      icon: FaCar,
      color: 'bg-green-500',
      priority: 'medium',
      autoSave: false,
      streak: 3
    },
    {
      id: 3,
      title: 'House Down Payment',
      description: 'Down payment for 3-bedroom apartment in Lekki',
      targetAmount: 15000000,
      currentAmount: 4200000,
      monthlyTarget: 600000,
      deadline: '2025-06-30',
      status: 'active',
      icon: FaHome,
      color: 'bg-purple-500',
      priority: 'high',
      autoSave: true,
      streak: 8
    },
    {
      id: 4,
      title: 'Masters Degree',
      description: 'MBA program at Lagos Business School',
      targetAmount: 3500000,
      currentAmount: 3500000,
      monthlyTarget: 150000,
      deadline: '2024-03-31',
      status: 'completed',
      icon: FaGraduationCap,
      color: 'bg-yellow-500',
      priority: 'completed',
      autoSave: false,
      streak: 12
    }
  ];

  // Investment options
  const investmentOptions = [
    {
      id: 1,
      name: 'High Yield Savings',
      description: 'FDIC insured savings with competitive rates',
      expectedReturn: '12-15%',
      riskLevel: 'Low',
      minAmount: 50000,
      color: 'bg-green-500',
      recommended: true
    },
    {
      id: 2,
      name: 'Fixed Deposits',
      description: 'Guaranteed returns with flexible tenure',
      expectedReturn: '10-13%',
      riskLevel: 'Very Low',
      minAmount: 100000,
      color: 'bg-blue-500',
      recommended: false
    },
    {
      id: 3,
      name: 'Mutual Funds',
      description: 'Diversified portfolio managed by experts',
      expectedReturn: '15-20%',
      riskLevel: 'Medium',
      minAmount: 25000,
      color: 'bg-purple-500',
      recommended: true
    },
    {
      id: 4,
      name: 'Treasury Bills',
      description: 'Government backed short-term investments',
      expectedReturn: '8-12%',
      riskLevel: 'Very Low',
      minAmount: 10000,
      color: 'bg-emerald',
      recommended: false
    }
  ];

  // Savings challenges
  const savingsChallenges = [
    {
      id: 1,
      name: '52-Week Challenge',
      description: 'Save incrementally each week for a year',
      targetAmount: 1378000,
      participants: 2845,
      duration: '52 weeks',
      difficulty: 'Medium',
      status: 'available'
    },
    {
      id: 2,
      name: 'No-Spend November',
      description: 'Avoid unnecessary expenses this month',
      targetAmount: 150000,
      participants: 892,
      duration: '1 month',
      difficulty: 'Hard',
      status: 'active'
    },
    {
      id: 3,
      name: 'Daily N1000',
      description: 'Save ₦1,000 every day for 6 months',
      targetAmount: 180000,
      participants: 1567,
      duration: '6 months',
      difficulty: 'Easy',
      status: 'available'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const calculateMonthsToGoal = (current, target, monthly) => {
    if (monthly <= 0) return '∞';
    const remaining = target - current;
    const months = Math.ceil(remaining / monthly);
    return months > 0 ? months : 0;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'active':
        return 'text-emerald bg-emerald/10';
      case 'paused':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-neutral-muted-grey bg-neutral-light-bg';
    }
  };

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
                <h1 className="text-xl font-bold text-graphite">Savings</h1>
                <p className="text-sm text-neutral-muted-grey">
                  Build your financial future
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowCreateGoal(true)}
              className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
            >
              <FaPlus className="text-sm" />
              <span className="hidden sm:inline">New Goal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex space-x-1 bg-neutral-light-bg rounded-lg p-1 mb-6">
          {[
            { id: 'goals', label: 'Savings Goals', icon: FaBullseye },
            { id: 'invest', label: 'Invest', icon: FaChartLine },
            { id: 'challenges', label: 'Challenges', icon: FaTrophy }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                selectedTab === tab.id
                  ? 'bg-white shadow-sm text-emerald'
                  : 'text-neutral-muted-grey hover:text-graphite'
              }`}
            >
              <tab.icon className="text-sm" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Savings Goals Tab */}
        {selectedTab === 'goals' && (
          <div className="space-y-6">
            {/* Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-muted-grey">Total Saved</p>
                    <p className="text-xl font-bold text-emerald">
                      {formatCurrency(savingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0))}
                    </p>
                  </div>
                  <FaPiggyBank className="text-emerald text-2xl" />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-muted-grey">Active Goals</p>
                    <p className="text-xl font-bold text-graphite">
                      {savingsGoals.filter(goal => goal.status === 'active').length}
                    </p>
                  </div>
                  <FaBullseye className="text-blue-500 text-2xl" />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-muted-grey">Completed</p>
                    <p className="text-xl font-bold text-green-600">
                      {savingsGoals.filter(goal => goal.status === 'completed').length}
                    </p>
                  </div>
                  <FaTrophy className="text-green-600 text-2xl" />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-muted-grey">Avg. Progress</p>
                    <p className="text-xl font-bold text-purple-600">
                      {Math.round(savingsGoals.reduce((sum, goal) => sum + getProgressPercentage(goal.currentAmount, goal.targetAmount), 0) / savingsGoals.length)}%
                    </p>
                  </div>
                  <FaChartLine className="text-purple-600 text-2xl" />
                </div>
              </div>
            </div>

            {/* Goals List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {savingsGoals.map((goal) => (
                <div key={goal.id} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${goal.color} rounded-2xl flex items-center justify-center text-white`}>
                        <goal.icon className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-graphite">{goal.title}</h4>
                        <p className="text-sm text-neutral-muted-grey">{goal.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                        {goal.status === 'completed' ? 'Completed' : 'Active'}
                      </div>
                      {goal.autoSave && <FaLock className="text-emerald text-sm" title="Auto-save enabled" />}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-neutral-muted-grey">Progress</span>
                        <span className="font-semibold text-graphite">
                          {getProgressPercentage(goal.currentAmount, goal.targetAmount).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-neutral-light-bg rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${goal.color} transition-all duration-500`}
                          style={{ width: `${getProgressPercentage(goal.currentAmount, goal.targetAmount)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-neutral-muted-grey">Saved</p>
                        <p className="font-semibold text-graphite">{formatCurrency(goal.currentAmount)}</p>
                      </div>
                      <div>
                        <p className="text-neutral-muted-grey">Target</p>
                        <p className="font-semibold text-graphite">{formatCurrency(goal.targetAmount)}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-neutral-muted-grey">Monthly</p>
                        <p className="font-semibold text-emerald">{formatCurrency(goal.monthlyTarget)}</p>
                      </div>
                      <div>
                        <p className="text-neutral-muted-grey">Time to goal</p>
                        <p className="font-semibold text-graphite">
                          {calculateMonthsToGoal(goal.currentAmount, goal.targetAmount, goal.monthlyTarget)} months
                        </p>
                      </div>
                    </div>
                    
                    {goal.streak > 0 && (
                      <div className="flex items-center space-x-2 text-sm">
                        <FaFire className="text-orange-500" />
                        <span className="text-neutral-muted-grey">
                          {goal.streak} month{goal.streak !== 1 ? 's' : ''} streak
                        </span>
                      </div>
                    )}
                    
                    <div className="flex space-x-2 pt-2">
                      <button className="flex-1 bg-emerald hover:bg-emerald/90 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                        Add Money
                      </button>
                      <button className="p-2 border border-neutral-light-grey rounded-lg hover:bg-neutral-light-bg transition-colors">
                        <FaEdit className="text-neutral-muted-grey" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Investment Tab */}
        {selectedTab === 'invest' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald/10 to-jade/10 rounded-2xl p-6 border border-emerald/20">
              <h3 className="font-semibold text-graphite mb-2 flex items-center space-x-2">
                <FaRocket className="text-emerald" />
                <span>Grow Your Money</span>
              </h3>
              <p className="text-sm text-neutral-muted-grey">
                Start investing to beat inflation and build long-term wealth. All investments are regulated and insured.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {investmentOptions.map((option) => (
                <div key={option.id} className={`bg-white rounded-2xl p-6 shadow-sm border transition-all hover:shadow-md ${
                  option.recommended ? 'border-emerald ring-2 ring-emerald/20' : 'border-neutral-light-grey/50'
                }`}>
                  {option.recommended && (
                    <div className="flex items-center space-x-1 text-emerald text-xs font-semibold mb-3">
                      <FaStar className="text-xs" />
                      <span>RECOMMENDED</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${option.color} rounded-2xl flex items-center justify-center text-white`}>
                      <FaChartLine className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-graphite">{option.name}</h4>
                      <p className="text-sm text-neutral-muted-grey">{option.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-neutral-muted-grey">Expected Return</span>
                      <span className="font-semibold text-green-600">{option.expectedReturn} p.a.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-neutral-muted-grey">Risk Level</span>
                      <span className={`text-sm font-medium ${
                        option.riskLevel === 'Very Low' ? 'text-green-600' :
                        option.riskLevel === 'Low' ? 'text-emerald' :
                        option.riskLevel === 'Medium' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {option.riskLevel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-neutral-muted-grey">Minimum Amount</span>
                      <span className="font-semibold text-graphite">{formatCurrency(option.minAmount)}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-emerald hover:bg-emerald/90 text-white py-3 rounded-lg transition-colors font-medium">
                    Start Investing
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {selectedTab === 'challenges' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200">
              <h3 className="font-semibold text-graphite mb-2 flex items-center space-x-2">
                <FaTrophy className="text-purple-600" />
                <span>Savings Challenges</span>
              </h3>
              <p className="text-sm text-neutral-muted-grey">
                Join fun savings challenges and compete with other savers to reach your goals faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savingsChallenges.map((challenge) => (
                <div key={challenge.id} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white">
                      <FaTrophy className="text-lg" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      challenge.status === 'active' ? 'bg-emerald/10 text-emerald' : 'bg-neutral-light-bg text-neutral-muted-grey'
                    }`}>
                      {challenge.status === 'active' ? 'Joined' : 'Available'}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-graphite">{challenge.name}</h4>
                    <p className="text-sm text-neutral-muted-grey">{challenge.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-muted-grey">Target</span>
                        <span className="font-semibold text-graphite">{formatCurrency(challenge.targetAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-muted-grey">Duration</span>
                        <span className="font-semibold text-graphite">{challenge.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-muted-grey">Difficulty</span>
                        <span className={`font-medium ${
                          challenge.difficulty === 'Easy' ? 'text-green-600' :
                          challenge.difficulty === 'Medium' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-muted-grey">Participants</span>
                        <span className="font-semibold text-emerald">{challenge.participants.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg transition-colors font-medium ${
                    challenge.status === 'active'
                      ? 'bg-emerald/10 text-emerald border border-emerald'
                      : 'bg-emerald hover:bg-emerald/90 text-white'
                  }`}>
                    {challenge.status === 'active' ? 'View Progress' : 'Join Challenge'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Create Goal Modal */}
      <CreateGoalModal 
        showCreateGoal={showCreateGoal} 
        setShowCreateGoal={setShowCreateGoal} 
        formatCurrency={formatCurrency} 
      />
    </div>
  );
};

export default SavingsPage;