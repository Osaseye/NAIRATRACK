import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaUser,
  FaBell,
  FaShieldAlt,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaEdit,
  FaCamera,
  FaLock,
  FaUnlock,
  FaEye,
  FaEyeSlash,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaToggleOff,
  FaToggleOn,
  FaChevronRight,
  FaDownload,
  FaTrash,
  FaKey,
  FaCreditCard,
  FaLanguage,
  FaMoon,
  FaSun,
  FaWifi,
  FaFingerprint
} from 'react-icons/fa';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [notificationSettings, setNotificationSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    budgetAlerts: true,
    transactionAlerts: true,
    goalReminders: true,
    marketingEmails: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    biometricAuth: true,
    autoLock: 5,
    transactionPin: true
  });

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  const userProfile = {
    firstName: 'Adebayo',
    lastName: 'Johnson',
    email: 'adebayo.johnson@email.com',
    phone: '+234 802 123 4567',
    location: 'Lagos, Nigeria',
    joinDate: 'January 2024',
    avatar: null
  };

  const settingSections = [
    { id: 'profile', name: 'Profile', icon: FaUser },
    { id: 'notifications', name: 'Notifications', icon: FaBell },
    { id: 'security', name: 'Security & Privacy', icon: FaShieldAlt },
    { id: 'preferences', name: 'Preferences', icon: FaCog },
    { id: 'support', name: 'Help & Support', icon: FaQuestionCircle }
  ];

  const toggleNotification = (key) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSecurity = (key, value = null) => {
    setSecuritySettings(prev => ({
      ...prev,
      [key]: value !== null ? value : !prev[key]
    }));
  };

  const ChangePasswordModal = () => {
    if (!showChangePassword) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-graphite">Change Password</h3>
            <button 
              onClick={() => setShowChangePassword(false)}
              className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                placeholder="Confirm new password"
              />
            </div>
            
            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowChangePassword(false)}
                className="flex-1 px-4 py-3 border border-neutral-light-grey text-neutral-muted-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-emerald hover:bg-emerald/90 text-white px-4 py-3 rounded-lg transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DeleteAccountModal = () => {
    if (!showDeleteAccount) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-red-600">Delete Account</h3>
            <button 
              onClick={() => setShowDeleteAccount(false)}
              className="p-2 hover:bg-neutral-light-bg rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Warning: This action cannot be undone</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• All your financial data will be permanently deleted</li>
                <li>• Your cards will be deactivated immediately</li>
                <li>• You will lose access to all saved transactions</li>
                <li>• Your savings goals and budgets will be removed</li>
              </ul>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">
                Type "DELETE" to confirm
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                placeholder="Type DELETE here"
              />
            </div>
            
            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowDeleteAccount(false)}
                className="flex-1 px-4 py-3 border border-neutral-light-grey text-neutral-muted-grey rounded-lg hover:bg-neutral-light-bg transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg transition-colors">
                Delete Account
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
                <h1 className="text-xl font-bold text-graphite">Settings</h1>
                <p className="text-sm text-neutral-muted-grey">
                  Manage your account and preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-light-grey/50 sticky top-24">
              <nav className="space-y-2">
                {settingSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                      activeSection === section.id
                        ? 'bg-emerald text-white'
                        : 'text-neutral-muted-grey hover:bg-neutral-light-bg hover:text-graphite'
                    }`}
                  >
                    <section.icon className="text-lg" />
                    <span className="font-medium">{section.name}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-6 pt-4 border-t border-neutral-light-grey/30">
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-left">
                  <FaSignOutAlt className="text-lg" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            {/* Profile Section */}
            {activeSection === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                  <h3 className="text-lg font-bold text-graphite mb-6">Profile Information</h3>
                  
                  {/* Profile Photo */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald to-jade rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {userProfile.firstName[0]}{userProfile.lastName[0]}
                      </div>
                      <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald text-white rounded-full flex items-center justify-center hover:bg-emerald/90 transition-colors">
                        <FaCamera className="text-xs" />
                      </button>
                    </div>
                    <div>
                      <h4 className="font-semibold text-graphite">{userProfile.firstName} {userProfile.lastName}</h4>
                      <p className="text-sm text-neutral-muted-grey">Member since {userProfile.joinDate}</p>
                      <button className="text-emerald text-sm font-medium hover:text-jade transition-colors">
                        Change Photo
                      </button>
                    </div>
                  </div>
                  
                  {/* Profile Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-graphite mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue={userProfile.firstName}
                        className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-graphite mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue={userProfile.lastName}
                        className="w-full px-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-graphite mb-2">Email Address</label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey" />
                        <input
                          type="email"
                          defaultValue={userProfile.email}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-graphite mb-2">Phone Number</label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey" />
                        <input
                          type="tel"
                          defaultValue={userProfile.phone}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-graphite mb-2">Location</label>
                      <div className="relative">
                        <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted-grey" />
                        <input
                          type="text"
                          defaultValue={userProfile.location}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-light-grey rounded-lg focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <button className="bg-emerald hover:bg-emerald/90 text-white px-6 py-3 rounded-lg transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Section */}
            {activeSection === 'notifications' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                  <h3 className="text-lg font-bold text-graphite mb-6">Notification Preferences</h3>
                  
                  <div className="space-y-6">
                    {/* Push Notifications */}
                    <div>
                      <h4 className="font-semibold text-graphite mb-4">Push Notifications</h4>
                      <div className="space-y-4">
                        {[
                          { key: 'pushNotifications', label: 'Enable Push Notifications', description: 'Receive notifications on your device' },
                          { key: 'transactionAlerts', label: 'Transaction Alerts', description: 'Get notified for all transactions' },
                          { key: 'budgetAlerts', label: 'Budget Alerts', description: 'Alerts when approaching budget limits' },
                          { key: 'goalReminders', label: 'Goal Reminders', description: 'Reminders about savings goals' }
                        ].map((setting) => (
                          <div key={setting.key} className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                            <div>
                              <p className="font-medium text-graphite">{setting.label}</p>
                              <p className="text-sm text-neutral-muted-grey">{setting.description}</p>
                            </div>
                            <button
                              onClick={() => toggleNotification(setting.key)}
                              className={`w-12 h-6 rounded-full transition-colors ${
                                notificationSettings[setting.key] ? 'bg-emerald' : 'bg-gray-300'
                              }`}
                            >
                              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                notificationSettings[setting.key] ? 'translate-x-6' : 'translate-x-0.5'
                              }`}></div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Email & SMS */}
                    <div>
                      <h4 className="font-semibold text-graphite mb-4">Email & SMS</h4>
                      <div className="space-y-4">
                        {[
                          { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive important updates via email' },
                          { key: 'smsNotifications', label: 'SMS Notifications', description: 'Get SMS for critical alerts' },
                          { key: 'marketingEmails', label: 'Marketing Emails', description: 'Receive tips and product updates' }
                        ].map((setting) => (
                          <div key={setting.key} className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                            <div>
                              <p className="font-medium text-graphite">{setting.label}</p>
                              <p className="text-sm text-neutral-muted-grey">{setting.description}</p>
                            </div>
                            <button
                              onClick={() => toggleNotification(setting.key)}
                              className={`w-12 h-6 rounded-full transition-colors ${
                                notificationSettings[setting.key] ? 'bg-emerald' : 'bg-gray-300'
                              }`}
                            >
                              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                notificationSettings[setting.key] ? 'translate-x-6' : 'translate-x-0.5'
                              }`}></div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Section */}
            {activeSection === 'security' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                  <h3 className="text-lg font-bold text-graphite mb-6">Security & Privacy</h3>
                  
                  <div className="space-y-6">
                    {/* Authentication */}
                    <div>
                      <h4 className="font-semibold text-graphite mb-4">Authentication</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FaKey className="text-emerald" />
                            <div>
                              <p className="font-medium text-graphite">Change Password</p>
                              <p className="text-sm text-neutral-muted-grey">Update your account password</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setShowChangePassword(true)}
                            className="text-emerald hover:text-jade transition-colors"
                          >
                            <FaChevronRight />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FaShieldAlt className="text-emerald" />
                            <div>
                              <p className="font-medium text-graphite">Two-Factor Authentication</p>
                              <p className="text-sm text-neutral-muted-grey">Add an extra layer of security</p>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleSecurity('twoFactorAuth')}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              securitySettings.twoFactorAuth ? 'bg-emerald' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              securitySettings.twoFactorAuth ? 'translate-x-6' : 'translate-x-0.5'
                            }`}></div>
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FaFingerprint className="text-emerald" />
                            <div>
                              <p className="font-medium text-graphite">Biometric Authentication</p>
                              <p className="text-sm text-neutral-muted-grey">Use fingerprint or face ID</p>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleSecurity('biometricAuth')}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              securitySettings.biometricAuth ? 'bg-emerald' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              securitySettings.biometricAuth ? 'translate-x-6' : 'translate-x-0.5'
                            }`}></div>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Security */}
                    <div>
                      <h4 className="font-semibold text-graphite mb-4">App Security</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                          <div>
                            <p className="font-medium text-graphite">Auto-Lock Timer</p>
                            <p className="text-sm text-neutral-muted-grey">Lock app after inactivity</p>
                          </div>
                          <select 
                            value={securitySettings.autoLock}
                            onChange={(e) => toggleSecurity('autoLock', parseInt(e.target.value))}
                            className="px-3 py-2 border border-neutral-light-grey rounded-lg text-sm"
                          >
                            <option value={1}>1 minute</option>
                            <option value={5}>5 minutes</option>
                            <option value={10}>10 minutes</option>
                            <option value={30}>30 minutes</option>
                          </select>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                          <div>
                            <p className="font-medium text-graphite">Transaction PIN</p>
                            <p className="text-sm text-neutral-muted-grey">Require PIN for transactions</p>
                          </div>
                          <button
                            onClick={() => toggleSecurity('transactionPin')}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              securitySettings.transactionPin ? 'bg-emerald' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              securitySettings.transactionPin ? 'translate-x-6' : 'translate-x-0.5'
                            }`}></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Danger Zone */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-200">
                  <h3 className="text-lg font-bold text-red-600 mb-6">Danger Zone</h3>
                  <div className="space-y-4">
                    <button 
                      onClick={() => setShowDeleteAccount(true)}
                      className="w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <FaTrash className="text-red-500" />
                        <div className="text-left">
                          <p className="font-medium text-red-600">Delete Account</p>
                          <p className="text-sm text-neutral-muted-grey">Permanently delete your account and data</p>
                        </div>
                      </div>
                      <FaChevronRight className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Section */}
            {activeSection === 'preferences' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                  <h3 className="text-lg font-bold text-graphite mb-6">App Preferences</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FaLanguage className="text-emerald" />
                          <div>
                            <p className="font-medium text-graphite">Language</p>
                            <p className="text-sm text-neutral-muted-grey">Choose your preferred language</p>
                          </div>
                        </div>
                        <select className="px-3 py-2 border border-neutral-light-grey rounded-lg text-sm">
                          <option value="en">English</option>
                          <option value="yo">Yoruba</option>
                          <option value="ig">Igbo</option>
                          <option value="ha">Hausa</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FaMoon className="text-emerald" />
                          <div>
                            <p className="font-medium text-graphite">Dark Mode</p>
                            <p className="text-sm text-neutral-muted-grey">Switch to dark theme</p>
                          </div>
                        </div>
                        <button className="w-12 h-6 rounded-full bg-gray-300">
                          <div className="w-5 h-5 bg-white rounded-full translate-x-0.5 transition-transform"></div>
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg">
                        <div>
                          <p className="font-medium text-graphite">Currency Display</p>
                          <p className="text-sm text-neutral-muted-grey">Choose currency format</p>
                        </div>
                        <select className="px-3 py-2 border border-neutral-light-grey rounded-lg text-sm">
                          <option value="ngn">₦ (NGN)</option>
                          <option value="usd">$ (USD)</option>
                          <option value="eur">€ (EUR)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                  <h3 className="text-lg font-bold text-graphite mb-6">Data & Storage</h3>
                  
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg hover:bg-neutral-light-grey transition-colors">
                      <div className="flex items-center space-x-3">
                        <FaDownload className="text-emerald" />
                        <div className="text-left">
                          <p className="font-medium text-graphite">Export Data</p>
                          <p className="text-sm text-neutral-muted-grey">Download your financial data</p>
                        </div>
                      </div>
                      <FaChevronRight className="text-neutral-muted-grey" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Support Section */}
            {activeSection === 'support' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-light-grey/50">
                  <h3 className="text-lg font-bold text-graphite mb-6">Help & Support</h3>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Help Center', description: 'Browse frequently asked questions', icon: FaQuestionCircle },
                      { title: 'Contact Support', description: 'Get help from our support team', icon: FaEnvelope },
                      { title: 'Report a Bug', description: 'Report issues with the app', icon: FaCog },
                      { title: 'Feature Request', description: 'Suggest new features', icon: FaUser },
                      { title: 'Privacy Policy', description: 'Read our privacy policy', icon: FaShieldAlt },
                      { title: 'Terms of Service', description: 'View terms and conditions', icon: FaUser }
                    ].map((item, index) => (
                      <button key={index} className="w-full flex items-center justify-between p-4 bg-neutral-light-bg rounded-lg hover:bg-neutral-light-grey transition-colors">
                        <div className="flex items-center space-x-3">
                          <item.icon className="text-emerald" />
                          <div className="text-left">
                            <p className="font-medium text-graphite">{item.title}</p>
                            <p className="text-sm text-neutral-muted-grey">{item.description}</p>
                          </div>
                        </div>
                        <FaChevronRight className="text-neutral-muted-grey" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald/10 to-jade/10 rounded-2xl p-6 border border-emerald/20">
                  <h3 className="font-semibold text-graphite mb-2">NairaTrack v2.1.0</h3>
                  <p className="text-sm text-neutral-muted-grey mb-4">
                    Your financial companion for building generational wealth in Nigeria.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-neutral-muted-grey">
                    <span>Made with ❤️ in Nigeria</span>
                    <span>•</span>
                    <span>© 2024 NairaTrack</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ChangePasswordModal />
      <DeleteAccountModal />
    </div>
  );
};

export default SettingsPage;