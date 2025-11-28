import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { 
  FaDollarSign, 
  FaChartLine, 
  FaBullseye, 
  FaLock, 
  FaMobile, 
  FaRocket,
  FaUtensils,
  FaCar,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaHeart,
  FaWifi,
  FaGamepad,
  FaShoppingCart,
  FaCheck,
  FaUsers
} from 'react-icons/fa';

const LandingPage = () => {
  // Animation state for hero mockup
  const [animationStep, setAnimationStep] = useState(0);
  const [balance, setBalance] = useState(485250);
  const [income, setIncome] = useState(125000);
  const [expenses, setExpenses] = useState(45000);
  
  const transactions = [
    { icon: FaUtensils, name: 'Food & Drinks', category: 'Food', amount: -3500, color: 'emerald' },
    { icon: FaCar, name: 'Transport', category: 'Transport', amount: -1200, color: 'jade' },
    { icon: FaWifi, name: 'Data Bundle', category: 'Internet', amount: -2500, color: 'blue' },
    { icon: FaGamepad, name: 'Entertainment', category: 'Fun', amount: -5000, color: 'purple' },
    { icon: FaShoppingCart, name: 'Groceries', category: 'Shopping', amount: -8500, color: 'orange' },
    { icon: FaCar, name: 'Uber Ride', category: 'Transport', amount: -3200, color: 'jade' },
    { icon: FaWifi, name: 'Airtime', category: 'Communication', amount: -1000, color: 'blue' },
  ];
  
  // Calculate actual total expenses from transactions
  const actualExpenses = transactions.reduce((total, transaction) => total + Math.abs(transaction.amount), 0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % transactions.length);
      
      // Simulate balance changes
      if (animationStep === 0) {
        setIncome(prev => prev + 50000);
        setBalance(prev => prev + 50000);
      } else if (animationStep === 2) {
        const newExpenseAmount = Math.floor(Math.random() * 5000);
        setExpenses(actualExpenses + newExpenseAmount);
        setBalance(prev => prev - newExpenseAmount);
      }
    }, 2500); // Faster animation - every 2.5 seconds
    
    return () => clearInterval(interval);
  }, [animationStep, actualExpenses]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald/5 to-jade/5">
      {/* Header */}
      <header className="relative z-10">
        <nav className="flex items-center justify-between p-6 max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src="/icon.png" alt="NairaTrack Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-graphite">NairaTrack</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-graphite hover:text-emerald transition-colors">Features</a>
            <a href="#about" className="text-graphite hover:text-emerald transition-colors">About</a>
            <Link to="/login">
              <Button variant="secondary" size="small">Sign In</Button>
            </Link>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Link to="/signup">
              <Button variant="primary" size="small">Join</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-graphite leading-tight mb-6">
                Master Your
                <span className="text-transparent bg-gradient-to-r from-emerald to-jade bg-clip-text"> ₦aira</span>
                <br />Like a Pro
              </h1>
              <p className="text-xl text-neutral-muted-grey leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                The smartest way for Nigerians to track expenses, manage budgets, and achieve financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                    Start Free Today
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-8 space-x-4 text-sm text-neutral-muted-grey">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  Free to start
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  No credit card
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  100% Nigerian
                </span>
              </div>
            </div>
            
            {/* Hero Visual - Animated */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-sm transform transition-transform duration-500 hover:scale-105">
                {/* Mock Phone Interface */}
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-neutral-muted-grey text-sm mb-2">Total Balance</p>
                    <h3 className="text-3xl font-bold text-graphite transition-all duration-1000">
                      ₦{balance.toLocaleString()}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-success/10 rounded-xl p-4 text-center transition-all duration-1000">
                      <p className="text-success font-semibold">₦{Math.floor(income/1000)}K</p>
                      <p className="text-xs text-neutral-muted-grey">Income</p>
                    </div>
                    <div className="bg-error/10 rounded-xl p-4 text-center transition-all duration-1000">
                      <p className="text-error font-semibold">₦{Math.floor(actualExpenses/1000)}K</p>
                      <p className="text-xs text-neutral-muted-grey">Expenses</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 h-48 overflow-hidden">
                    {transactions.slice(animationStep, animationStep + 4).map((transaction, index) => {
                      const IconComponent = transaction.icon;
                      const isActive = index === 0; // First transaction is always the active/newest one
                      return (
                        <div key={`${animationStep}-${index}`} className={`flex justify-between items-center transition-all duration-500 transform ${
                          isActive ? 'bg-emerald/5 rounded-lg p-2 scale-102' : 'translate-y-0'
                        } animate-slide-up`}>
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                              isActive ? 'scale-110' : ''
                            }`}>
                              <IconComponent className="text-emerald text-xs" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-graphite">{transaction.name}</p>
                              <p className="text-xs text-neutral-muted-grey">
                                {isActive ? 'Just now' : index === 1 ? 'Today' : index === 2 ? 'Yesterday' : '2 days ago'}
                              </p>
                            </div>
                          </div>
                          <p className="text-error font-medium">₦{transaction.amount.toLocaleString()}</p>
                        </div>
                      );
                    })}
                    
                    {/* Income transaction appears occasionally */}
                    {animationStep % 3 === 0 && (
                      <div className="flex justify-between items-center animate-slide-up bg-success/5 rounded-lg p-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                            <FaCheck className="text-success text-xs" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-graphite">Salary Received</p>
                            <p className="text-xs text-neutral-muted-grey">Just now</p>
                          </div>
                        </div>
                        <p className="text-success font-medium">+₦50,000</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-graphite mb-4">
              Built for Nigerian Lifestyle
            </h2>
            <p className="text-xl text-neutral-muted-grey max-w-2xl mx-auto">
              Unlike foreign apps, NairaTrack understands how Nigerians spend and save money.
            </p>
          </div>
          
          {/* Features Grid - New Design */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-emerald/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <FaDollarSign className="text-3xl text-emerald" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">Nigerian Categories</h3>
                  <p className="text-neutral-muted-grey leading-relaxed">
                    Track spending on airtime, data, transport, food, and other categories that matter to Nigerians.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-jade/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <FaBullseye className="text-3xl text-jade" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">Goal Achievement</h3>
                  <p className="text-neutral-muted-grey leading-relaxed">
                    Set realistic savings goals and get rewarded when you hit important milestones.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-emerald/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <FaMobile className="text-3xl text-emerald" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">Mobile First</h3>
                  <p className="text-neutral-muted-grey leading-relaxed">
                    Designed for your phone with lightning-fast performance and intuitive interface.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gold/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <FaChartLine className="text-3xl text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">Smart Insights</h3>
                  <p className="text-neutral-muted-grey leading-relaxed">
                    Get personalized insights based on Nigerian spending patterns and economic trends.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-jade/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <FaLock className="text-3xl text-jade" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">Bank-Level Security</h3>
                  <p className="text-neutral-muted-grey leading-relaxed">
                    Your financial data is protected with enterprise-grade encryption and security.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-emerald/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <FaRocket className="text-3xl text-emerald" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">Always Improving</h3>
                  <p className="text-neutral-muted-grey leading-relaxed">
                    Regular updates with new features based on feedback from Nigerian users like you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed" 
          style={{
            backgroundImage: `url('/Premium Photo _ A young man holding a bunch of new nigerian 1000 naira bills.jpg')`,
            transform: 'translateZ(0)', // Enable hardware acceleration for smooth scroll
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald/90 to-jade/80"></div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Thousands of Smart Nigerians
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to financial freedom today. No hidden fees, no complicated setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/signup">
              <Button variant="secondary" size="lg" className="bg-white text-emerald hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Get Started Free
              </Button>
            </Link>
            <a href="#features">
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10 px-8 py-4 text-lg">
                Learn More
              </Button>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <FaUsers className="text-2xl mr-2" />
                <p className="text-2xl font-bold">5,000+</p>
              </div>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <FaDollarSign className="text-2xl mr-2" />
                <p className="text-2xl font-bold">₦50M+</p>
              </div>
              <p className="text-sm">Money Tracked</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <FaLock className="text-2xl mr-2" />
                <p className="text-2xl font-bold">4.8★</p>
              </div>
              <p className="text-sm">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/icon.png" alt="NairaTrack Logo" className="w-10 h-10" />
                <span className="text-2xl font-bold">NairaTrack</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Empowering Nigerians to take control of their finances with smart tracking, budgeting, and savings tools built specifically for our lifestyle.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald transition-colors cursor-pointer">
                  <FaFacebookF className="text-sm" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald transition-colors cursor-pointer">
                  <FaTwitter className="text-sm" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald transition-colors cursor-pointer">
                  <FaLinkedinIn className="text-sm" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © 2025 NairaTrack. Made with <FaHeart className="text-red-500 mx-1" /> in Nigeria.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">🇳🇬 Proudly Nigerian</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;