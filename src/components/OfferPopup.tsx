import React, { useState, useEffect } from 'react';
import { X, Sparkles, Truck, Award, Zap } from 'lucide-react';

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Show popup after a small delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (!isOpen) return;
    
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds === 0) {
          seconds = 59;
          if (minutes === 0) {
            minutes = 59;
            if (hours === 0) {
              return { hours: 24, minutes: 0, seconds: 0 };
            }
            hours--;
          } else {
            minutes--;
          }
        } else {
          seconds--;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.5); }
          50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.8); }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shine 3s infinite;
        }
        .glow-box {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className={`relative w-full max-w-sm transform transition-all duration-500 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`} style={{ animation: 'slide-up 0.6s ease-out' }}>
        {/* Main Card with gradient border */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-golden/30">
          
          {/* Animated top stripe */}
          <div className="h-1 sm:h-1.5 bg-gradient-to-r from-golden via-amber-400 to-golden shine-effect relative" />

          {/* Close Button - Enhanced */}
          <button 
            onClick={handleClose}
            className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-golden/20 to-heritage/20 hover:from-golden/40 hover:to-heritage/40 text-gray-700 hover:text-black transition-all duration-300 hover:scale-110 z-20 border border-golden/30"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Compact Header - Centered */}
          <div className="relative overflow-hidden bg-gradient-to-br from-golden/30 via-amber-100 to-heritage/20 py-5 sm:py-6 px-3 sm:px-4">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-golden rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-heritage rounded-full blur-3xl" />
            </div>

            {/* Centered Offer Text */}
            <div className="relative text-center">
              <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-golden to-heritage bg-clip-text text-transparent leading-tight">
                20%
              </div>
              <div className="text-lg sm:text-xl font-bold text-heritage">OFF</div>
              <div className="inline-block mt-2 sm:mt-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                LIMITED OFFER
              </div>
            </div>
          </div>

          {/* Content Section - Compact */}
          <div className="p-3 sm:p-4">
            
            {/* Offer Details - Condensed */}
            <div className="text-center mb-3 sm:mb-3.5">
              <p className="text-[11px] sm:text-xs text-gray-600 font-medium leading-tight">
                First Order Above <span className="font-bold text-heritage">₹999</span>
              </p>
              <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5">Don't Miss This Deal!</p>
            </div>

            {/* Countdown Timer - Compact */}
            <div className="bg-gradient-to-r from-golden/15 to-heritage/15 rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-3.5 border border-golden/30 glow-box">
              <div className="text-center">
                <p className="text-[9px] sm:text-[10px] text-gray-600 font-bold mb-1.5">OFFER ENDS IN</p>
                <div className="flex justify-center gap-1.5 sm:gap-2">
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 min-w-10 sm:min-w-11 shadow-sm border border-golden/20">
                    <div className="text-sm sm:text-base font-bold text-heritage leading-none">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-[7px] sm:text-[8px] text-gray-600 font-semibold">H</div>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-heritage flex items-center">:</div>
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 min-w-10 sm:min-w-11 shadow-sm border border-golden/20">
                    <div className="text-sm sm:text-base font-bold text-heritage leading-none">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-[7px] sm:text-[8px] text-gray-600 font-semibold">M</div>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-heritage flex items-center">:</div>
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 min-w-10 sm:min-w-11 shadow-sm border border-golden/20">
                    <div className="text-sm sm:text-base font-bold text-heritage leading-none">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-[7px] sm:text-[8px] text-gray-600 font-semibold">S</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits - Compact Icons */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-3.5">
              <div className="text-center p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-golden/10 to-amber-100 border border-golden/20">
                <div className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-1 rounded-full bg-gradient-to-br from-golden to-amber-500 flex items-center justify-center shadow-sm">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold text-gray-700">Quality</div>
              </div>
              <div className="text-center p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-golden/10 to-amber-100 border border-golden/20">
                <div className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-1 rounded-full bg-gradient-to-br from-golden to-amber-500 flex items-center justify-center shadow-sm">
                  <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold text-gray-700">Shipping</div>
              </div>
              <div className="text-center p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-golden/10 to-amber-100 border border-golden/20">
                <div className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-1 rounded-full bg-gradient-to-br from-golden to-amber-500 flex items-center justify-center shadow-sm">
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold text-gray-700">Delivery</div>
              </div>
            </div>

            {/* Coupon Code Box - Compact */}
            <div className="bg-gradient-to-r from-heritage/10 to-golden/10 border-2 border-dashed border-golden/50 rounded-xl p-2.5 sm:p-3 text-center mb-3 sm:mb-3.5 shine-effect relative overflow-hidden">
              <p className="text-[9px] sm:text-[10px] text-gray-600 font-semibold mb-1">CODE</p>
              <div className="text-xl sm:text-2xl font-black text-heritage tracking-widest drop-shadow-sm">
                WELCOME20
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleClose}
              className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-golden via-amber-500 to-heritage text-white font-bold text-sm sm:text-base rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                SHOP NOW
              </span>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Trust Text */}
            <div className="text-center mt-2 px-2">
              <p className="text-[8px] sm:text-[9px] text-gray-500 leading-tight">
                ✓ Authentic | ✓ Secure | ✓ Guaranteed
              </p>
            </div>
          </div>

          {/* Bottom stripe */}
          <div className="h-1 sm:h-1.5 bg-gradient-to-r from-heritage via-golden to-heritage shine-effect relative" />
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;