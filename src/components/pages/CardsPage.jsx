import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaPlus, 
  FaCreditCard,
  FaLock,
  FaUnlock,
  FaEye,
  FaEyeSlash,
  FaPause,
  FaPlay,
  FaTrash,
  FaEdit,
  FaCopy,
  FaShoppingCart,
  FaUtensils,
  FaCar,
  FaGamepad,
  FaGlobe,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChartBar,
  FaShieldAlt,
  FaMobile,
  FaWifi,
  FaExclamationTriangle,
  FaCheckCircle
} from 'react-icons/fa';

const CardsPage = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showCreateCard, setShowCreateCard] = useState(false);

  // Mock cards data
  const cards = [
    {
      id: 1,
      name: 'Primary Spending Card',
      type: 'Virtual',
      number: '4532 **** **** 8901',
      fullNumber: '4532 1234 5678 8901',
      expiryDate: '12/26',
      cvv: '123',
      balance: 45000,
      status: 'active',
      color: 'bg-gradient-to-br from-emerald to-jade',
      limit: 500000,
      spent: 78500,
      freezeStatus: false,
      onlinePayments: true,
      atmWithdrawals: true,
      internationalPayments: false,
      contactless: true,
      lastUsed: '2 hours ago',
      merchant: 'Shoprite Lagos'
    },
    {
      id: 2,
      name: 'Savings Card',
      type: 'Virtual',
      number: '5426 **** **** 3456',
      fullNumber: '5426 9876 5432 3456',
      expiryDate: '08/27',
      cvv: '456',
      balance: 125000,
      status: 'active',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      limit: 200000,
      spent: 15000,
      freezeStatus: false,
      onlinePayments: true,
      atmWithdrawals: false,
      internationalPayments: false,
      contactless: false,
      lastUsed: '1 day ago',
      merchant: 'MTN Nigeria'
    },
    {
      id: 3,
      name: 'Travel Card',
      type: 'Virtual',
      number: '4929 **** **** 7890',
      fullNumber: '4929 5555 4444 7890',
      expiryDate: '03/28',
      cvv: '789',
      balance: 0,
      status: 'frozen',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      limit: 1000000,
      spent: 0,
      freezeStatus: true,
      onlinePayments: true,
      atmWithdrawals: true,
      internationalPayments: true,
      contactless: true,
      lastUsed: 'Never used',
      merchant: null
    }
  ];

  // Recent transactions
  const recentTransactions = [
    {
      id: 1,
      cardId: 1,
      merchant: 'Shoprite Lagos',
      category: 'Food & Drinks',
      amount: 23500,
      date: '2024-01-15',
      time: '14:30',
      icon: FaShoppingCart,
      location: 'Victoria Island',
      status: 'completed'
    },
    {
      id: 2,
      cardId: 1,
      merchant: 'Uber Nigeria',
      category: 'Transport',
      amount: 2800,
      date: '2024-01-14',
      time: '18:45',
      icon: FaCar,
      location: 'Lagos',
      status: 'completed'
    },
    {
      id: 3,
      cardId: 2,
      merchant: 'MTN Nigeria',
      category: 'Data & Airtime',
      amount: 5000,
      date: '2024-01-14',
      time: '12:00',
      icon: FaMobile,
      location: 'Online',
      status: 'completed'
    },
    {
      id: 4,
      cardId: 1,
      merchant: 'Dominos Pizza',
      category: 'Food & Drinks',
      amount: 12500,
      date: '2024-01-13',
      time: '20:00',
      icon: FaUtensils,
      location: 'Lekki',
      status: 'pending'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getCardTransactions = (cardId) => {
    return recentTransactions.filter(transaction => transaction.cardId === cardId);
  };

  const CreateCardModal = () => {
    if (!showCreateCard) return null;

    const cardTemplates = [
      {
        name: 'Spending Card',
        description: 'For daily expenses and online shopping',
        color: 'bg-gradient-to-br from-emerald to-jade',
        features: ['Online payments', 'ATM withdrawals', 'Contactless'],
        limit: 500000
      },
      {
        name: 'Savings Card',
        description: 'Limited access for savings protection',
        color: 'bg-gradient-to-br from-purple-500 to-purple-600',
        features: ['Online payments only', 'No ATM access', 'Budget control'],
        limit: 200000
      },
      {
        name: 'Travel Card',
        description: 'International payments and currency',
        color: 'bg-gradient-to-br from-blue-500 to-blue-600',
        features: ['International payments', 'Multi-currency', 'Travel insurance'],
        limit: 1000000
      }
    ];

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-graphite">Create New Card</h3>
            <button 
              onClick={() => setShowCreateCard(false)}
              className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-graphite mb-3">Choose card type</label>
              <div className="space-y-3">
                {cardTemplates.map((template, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 border border-neutral-light-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-8 ${template.color} rounded-lg flex items-center justify-center`}>
                        <FaCreditCard className="text-white text-sm" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-graphite">{template.name}</h4>
                        <p className="text-sm text-neutral-muted-grey">{template.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {template.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-neutral-light-bg px-2 py-1 rounded-full text-neutral-muted-grey">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-graphite mb-2">Card Name</label>
                <input
                  type="text"
                  placeholder="e.g., Shopping Card"
                  className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-graphite mb-2">Spending Limit</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey">₦</span>
                  <input
                    type="number"
                    placeholder="Enter spending limit"
                    className="w-full pl-8 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowCreateCard(false)}
                className="flex-1 px-4 py-3 border border-neutral-light-grey text-neutral-muted-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-emerald hover:bg-emerald/90 text-white px-4 py-3 rounded-lg transition-colors">
                Create Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CardDetailsModal = () => {
    if (!showCardDetails || !cards[selectedCard]) return null;
    
    const card = cards[selectedCard];

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-graphite">Card Details</h3>
            <button 
              onClick={() => setShowCardDetails(false)}
              className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-neutral-light-bg rounded-lg">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-muted-grey">Card Number</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono">{showCardDetails ? card.fullNumber : card.number}</span>
                    <button className="p-1 hover:bg-white rounded">
                      <FaCopy className="text-neutral-muted-grey text-xs" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-muted-grey">Expiry Date</span>
                  <span className="font-mono">{card.expiryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-muted-grey">CVV</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono">{showCardDetails ? card.cvv : '***'}</span>
                    <button className="p-1 hover:bg-white rounded">
                      <FaCopy className="text-neutral-muted-grey text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-graphite mb-3">Security Settings</h4>
              <div className="space-y-3">
                {[
                  { name: 'Online Payments', enabled: card.onlinePayments, icon: FaGlobe },
                  { name: 'ATM Withdrawals', enabled: card.atmWithdrawals, icon: FaCreditCard },
                  { name: 'International Payments', enabled: card.internationalPayments, icon: FaGlobe },
                  { name: 'Contactless Payments', enabled: card.contactless, icon: FaWifi }
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-neutral-light-bg rounded-lg">
                    <div className="flex items-center space-x-3">
                      <setting.icon className="text-neutral-muted-grey" />
                      <span className="text-sm font-medium text-graphite">{setting.name}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={setting.enabled} className="sr-only peer" readOnly />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4">
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition-colors">
                Freeze Card
              </button>
              <button className="flex-1 bg-emerald hover:bg-emerald/90 text-white py-3 rounded-lg transition-colors">
                Edit Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
                <h1 className="text-xl font-bold text-graphite">Cards</h1>
                <p className="text-sm text-neutral-muted-grey">
                  Manage your virtual cards
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowCreateCard(true)}
              className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
            >
              <FaPlus className="text-sm" />
              <span className="hidden sm:inline">New Card</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Cards Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Active Cards</p>
                <p className="text-2xl font-bold text-emerald">
                  {cards.filter(card => card.status === 'active').length}
                </p>
              </div>
              <FaCreditCard className="text-emerald text-2xl" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Total Balance</p>
                <p className="text-2xl font-bold text-graphite">
                  {formatCurrency(cards.reduce((sum, card) => sum + card.balance, 0))}
                </p>
              </div>
              <FaChartBar className="text-blue-500 text-2xl" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">This Month Spent</p>
                <p className="text-2xl font-bold text-red-600">
                  {formatCurrency(cards.reduce((sum, card) => sum + card.spent, 0))}
                </p>
              </div>
              <FaShoppingCart className="text-red-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <div key={card.id} className="relative">
              {/* Virtual Card */}
              <div className={`${card.color} rounded-2xl p-6 text-white relative overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl`}
                   onClick={() => {
                     setSelectedCard(index);
                     setShowCardDetails(true);
                   }}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-4 translate-y-4"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-white/80 text-xs font-medium">VIRTUAL CARD</p>
                      <p className="text-white text-sm font-semibold">{card.name}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {card.status === 'frozen' && <FaLock className="text-white/80 text-sm" />}
                      {card.contactless && <FaWifi className="text-white/80 text-sm" />}
                      <FaCreditCard className="text-white text-xl" />
                    </div>
                  </div>
                  
                  {/* Card Number */}
                  <div className="mb-6">
                    <p className="text-white text-lg font-mono tracking-wider">
                      {card.number}
                    </p>
                  </div>
                  
                  {/* Card Details */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs">VALID THRU</p>
                      <p className="text-white text-sm font-mono">{card.expiryDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs">BALANCE</p>
                      <p className="text-white text-sm font-semibold">
                        {formatCurrency(card.balance)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Status Indicator */}
                {card.status === 'frozen' && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    FROZEN
                  </div>
                )}
              </div>
              
              {/* Card Controls */}
              <div className="bg-white rounded-2xl p-4 mt-4 shadow-sm border border-neutral-light-grey/50">
                <div className="grid grid-cols-3 gap-2">
                  <button className="flex flex-col items-center space-y-1 p-3 hover:bg-neutral-light-bg rounded-lg transition-colors">
                    {card.freezeStatus ? <FaPlay className="text-green-500" /> : <FaPause className="text-red-500" />}
                    <span className="text-xs text-neutral-muted-grey font-medium">
                      {card.freezeStatus ? 'Unfreeze' : 'Freeze'}
                    </span>
                  </button>
                  <button className="flex flex-col items-center space-y-1 p-3 hover:bg-neutral-light-bg rounded-lg transition-colors">
                    <FaEdit className="text-emerald" />
                    <span className="text-xs text-neutral-muted-grey font-medium">Edit</span>
                  </button>
                  <button className="flex flex-col items-center space-y-1 p-3 hover:bg-neutral-light-bg rounded-lg transition-colors">
                    <FaEye className="text-blue-500" />
                    <span className="text-xs text-neutral-muted-grey font-medium">Details</span>
                  </button>
                </div>
                
                <div className="mt-4 pt-3 border-t border-neutral-light-grey/30">
                  <div className="flex justify-between text-xs text-neutral-muted-grey mb-2">
                    <span>Spent this month</span>
                    <span>{((card.spent / card.limit) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-neutral-light-bg rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-red-400 to-red-500 transition-all duration-500"
                      style={{ width: `${Math.min((card.spent / card.limit) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-muted-grey mt-1">
                    <span>{formatCurrency(card.spent)}</span>
                    <span>{formatCurrency(card.limit)}</span>
                  </div>
                  
                  {card.lastUsed && (
                    <div className="mt-3 text-xs text-neutral-muted-grey">
                      Last used: {card.lastUsed}
                      {card.merchant && <span> at {card.merchant}</span>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-graphite">Recent Card Transactions</h3>
            <Link to="/transactions" className="text-emerald hover:text-jade text-sm font-medium">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {recentTransactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center space-x-4 p-3 hover:bg-neutral-light-bg/50 rounded-lg transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-gradient-to-br from-neutral-light-bg to-neutral-light-grey rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <transaction.icon className="text-neutral-muted-grey text-lg" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-graphite group-hover:text-emerald transition-colors">
                      {transaction.merchant}
                    </h4>
                    <span className="font-bold text-red-600">
                      -{formatCurrency(transaction.amount)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-neutral-muted-grey">
                      <span>{transaction.category}</span>
                      <span>•</span>
                      <span>{cards.find(c => c.id === transaction.cardId)?.name}</span>
                      {transaction.location && (
                        <>
                          <span>•</span>
                          <span>{transaction.location}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {transaction.status}
                      </span>
                      <span className="text-xs text-neutral-muted-grey">
                        {transaction.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State for no cards */}
        {cards.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-neutral-light-grey/50">
            <div className="w-20 h-20 bg-neutral-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCreditCard className="text-neutral-muted-grey text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-graphite mb-2">No cards yet</h3>
            <p className="text-neutral-muted-grey mb-6">
              Create your first virtual card to start making secure payments
            </p>
            <button 
              onClick={() => setShowCreateCard(true)}
              className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors mx-auto"
            >
              <FaPlus className="text-sm" />
              <span>Create Card</span>
            </button>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start space-x-3">
            <FaShieldAlt className="text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold text-graphite mb-2">Secure Virtual Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-muted-grey">
                <div>• All transactions are encrypted and monitored</div>
                <div>• Instant freeze and unfreeze capabilities</div>
                <div>• Spending limits and merchant controls</div>
                <div>• Real-time fraud detection and alerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CreateCardModal />
      <CardDetailsModal />
    </div>
  );
};

export default CardsPage;