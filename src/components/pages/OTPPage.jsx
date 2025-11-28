import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { FaArrowLeft, FaEdit, FaSms } from 'react-icons/fa';

const OTPPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber] = useState('+234 812 345 6789'); // This would come from previous page/state
  const inputRefs = useRef([]);

  useEffect(() => {
    // Auto-focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    setCanResend(resendTimer === 0);
  }, [resendTimer]);

  const handleInputChange = (index, value) => {
    // Only allow numeric input
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < Math.min(pastedData.length, 6); i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus the next empty input or the last one
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('OTP verified:', otpValue);
        setIsLoading(false);
        navigate('/dashboard');
      }, 2000);
    }
  };

  const handleResendOTP = async () => {
    if (canResend) {
      setResendTimer(30);
      setCanResend(false);
      console.log('OTP resent to:', phoneNumber);
      // TODO: Add actual resend API call
    }
  };

  const isComplete = otp.join('').length === 6;

  return (
    <div className="h-screen bg-gradient-to-br from-emerald/5 via-jade/5 to-gold/5 overflow-hidden">
      {/* Mobile-first container */}
      <div className="h-full flex flex-col">
        {/* Header with back button */}
        <div className="flex items-center justify-between p-2 md:p-3 flex-shrink-0">
          <Link 
            to="/signup"
            className="flex items-center space-x-1 text-neutral-muted-grey hover:text-graphite transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            <span className="text-xs">Back</span>
          </Link>
          
          <Link 
            to="/login"
            className="text-xs text-emerald hover:text-jade font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-4 py-1 min-h-0">
          <div className="w-full max-w-sm">
            {/* Logo and welcome */}
            <div className="text-center mb-3">
              <div className="flex justify-center mb-2">
                <img src="/icon.png" alt="NairaTrack Logo" className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h1 className="text-base md:text-lg font-bold text-graphite mb-1">
                Verify Phone
              </h1>
              <p className="text-neutral-muted-grey text-xs mb-2">
                Code sent to
              </p>
              <div className="flex items-center justify-center space-x-1 text-emerald">
                <FaSms className="text-xs" />
                <span className="font-semibold text-xs">{phoneNumber}</span>
                <button className="text-neutral-muted-grey hover:text-emerald transition-colors">
                  <FaEdit className="text-xs" />
                </button>
              </div>
            </div>

            {/* OTP Form */}
            <div className="bg-white rounded-lg md:rounded-xl shadow-xl p-3 md:p-4">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* OTP Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-graphite text-center">
                    Enter Code
                  </label>
                  <div className="flex justify-center space-x-1">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-8 h-8 md:w-9 md:h-9 text-center text-sm font-bold border-2 border-neutral-light-grey rounded-lg focus:outline-none focus:border-emerald focus:ring-1 focus:ring-emerald/20 transition-all duration-200 bg-neutral-light-bg/50"
                        autoComplete="one-time-code"
                      />
                    ))}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex justify-center">
                    <div className="text-xs text-neutral-muted-grey">
                      {otp.filter(d => d).length}/6
                    </div>
                  </div>
                </div>

                {/* Verify button */}
                <div className="pt-1">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large" 
                    fullWidth
                    disabled={!isComplete}
                    loading={isLoading}
                    className="text-sm py-2"
                  >
                    {isLoading ? 'Verifying...' : 'Verify'}
                  </Button>
                </div>
              </form>

              {/* Resend Section */}
              <div className="text-center mt-3">
                <p className="text-neutral-muted-grey text-xs mb-2">
                  No code?
                </p>
                
                {canResend ? (
                  <button
                    onClick={handleResendOTP}
                    className="inline-flex items-center space-x-1 text-emerald hover:text-jade font-semibold transition-colors text-xs"
                  >
                    <FaSms />
                    <span>Resend</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-center space-x-1 text-neutral-muted-grey text-xs">
                    <div className="w-3 h-3 rounded-full border border-emerald/30 border-t-emerald animate-spin"></div>
                    <span>{resendTimer}s</span>
                  </div>
                )}
              </div>

              {/* Back to Login */}
              <div className="text-center mt-2">
                <Link 
                  to="/login" 
                  className="text-xs text-neutral-muted-grey hover:text-graphite transition-colors"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;