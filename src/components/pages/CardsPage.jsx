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

// CreateCardModal component
const CreateCardModal = ({ showCreateCard, setShowCreateCard, formatCurrency }) => {
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
              {cardTemplates.map((template) => (
                <button
                  key={template.name}
                  className="w-full text-left p-4 border border-neutral-light-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
                >
                  <div className={`w-full h-16 ${template.color} rounded-lg mb-3 flex items-center justify-center`}>
                    <span className="text-white font-bold">{template.name}</span>
                  </div>
                  <h4 className="font-semibold text-graphite mb-1">{template.name}</h4>
                  <p className="text-sm text-neutral-muted-grey mb-2">{template.description}</p>
                  <div className="text-xs text-neutral-muted-grey">
                    Limit: {formatCurrency(template.limit)}
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
                placeholder="e.g., My Spending Card"
                className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Spending Limit</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey">₦</span>
                <input
                  type="number"
                  placeholder="Set daily/monthly limit"
                  className="w-full pl-8 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                />
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
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

// CardDetailsModal component
const CardDetailsModal = ({ showCardDetails, setShowCardDetails, cards, selectedCard }) => {
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
                  <span className="font-mono">{card.fullNumber || card.number}</span>
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
                  <span className="font-mono">{card.cvv || '***'}</span>
                  <button className="p-1 hover:bg-white rounded">
                    <FaCopy className="text-neutral-muted-grey text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => setShowCardDetails(false)}
              className="flex-1 px-4 py-3 border border-neutral-light-grey text-neutral-muted-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
            >
              Close
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

const CardsPage = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);

  // Mock card data
  const cards = [
    {
      id: 1,
      name: 'Main Spending',
      type: 'Virtual',
      number: '**** **** **** 1234',
      fullNumber: '5123 4567 8901 1234',
      expiryDate: '12/27',
      cvv: '123',
      balance: 250000,
      limit: 500000,
      status: 'active',
      color: 'bg-gradient-to-br from-emerald to-jade'
    },
    {
      id: 2,
      name: 'Savings Card',
      type: 'Virtual',
      number: '**** **** **** 5678',
      fullNumber: '5123 4567 8901 5678',
      expiryDate: '12/27',
      cvv: '456',
      balance: 180000,
      limit: 200000,
      status: 'locked',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
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
                <p className="text-sm text-neutral-muted-grey">Total Spent</p>
                <p className="text-2xl font-bold text-graphite">{formatCurrency(125000)}</p>
              </div>
              <FaShoppingCart className="text-blue-500 text-2xl" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-muted-grey">Available Balance</p>
                <p className="text-2xl font-bold text-graphite">{formatCurrency(430000)}</p>
              </div>
              <FaWifi className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div key={card.id} className="relative">
              <div className={`w-full h-48 ${card.color} rounded-2xl p-6 text-white cursor-pointer transform hover:scale-105 transition-transform duration-200`}
                onClick={() => {
                  setSelectedCard(cards.indexOf(card));
                  setShowCardDetails(true);
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm opacity-75">{card.type}</span>
                  <FaCreditCard className="text-xl" />
                </div>
                
                <div className="mb-4">
                  <p className="text-lg font-mono tracking-wider">{card.number}</p>
                  <p className="text-xs opacity-75 mt-1">{card.name}</p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-75">Balance</p>
                    <p className="font-semibold">{formatCurrency(card.balance)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-75">Expires</p>
                    <p className="font-mono text-sm">{card.expiryDate}</p>
                  </div>
                </div>
              </div>
              
              {/* Card Status */}
              <div className="absolute top-4 right-4">
                {card.status === 'active' ? (
                  <FaCheckCircle className="text-white" />
                ) : (
                  <FaLock className="text-white" />
                )}
              </div>
              
              {/* Card Actions */}
              <div className="mt-4 flex space-x-2">
                <button 
                  className="flex-1 bg-white border border-neutral-light-grey text-neutral-muted-grey py-2 px-3 rounded-lg hover:bg-neutral-light-bg transition-colors text-sm"
                  onClick={() => {
                    setSelectedCard(cards.indexOf(card));
                    setShowCardDetails(true);
                  }}
                >
                  <FaEye className="inline mr-2" />
                  View Details
                </button>
                <button className="flex-1 bg-emerald text-white py-2 px-3 rounded-lg hover:bg-emerald/90 transition-colors text-sm">
                  {card.status === 'active' ? (
                    <>
                      <FaPause className="inline mr-2" />
                      Freeze
                    </>
                  ) : (
                    <>
                      <FaPlay className="inline mr-2" />
                      Unfreeze
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <FaShieldAlt className="text-amber-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Security Notice</h3>
              <p className="text-amber-700 text-sm mb-3">
                Your virtual cards are protected with bank-level security. Never share your card details with anyone.
              </p>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• Enable notifications for all transactions</li>
                <li>• Review transactions regularly</li>
                <li>• Report suspicious activity immediately</li>
                <li>• Keep your app updated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CreateCardModal 
        showCreateCard={showCreateCard} 
        setShowCreateCard={setShowCreateCard} 
        formatCurrency={formatCurrency} 
      />
      <CardDetailsModal 
        showCardDetails={showCardDetails} 
        setShowCardDetails={setShowCardDetails} 
        cards={cards}
        selectedCard={selectedCard}
      />
    </div>
  );
};

export default CardsPage;