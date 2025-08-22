'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream-50 text-charcoal">

      {/* Hero Section */}
      <section className="min-h-screen w-full relative z-10">
        {/* Hero Content */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-20">
          {/* Ambient particles animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float-1"></div>
            <div className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-float-2"></div>
            <div className="absolute w-3 h-3 bg-primary/10 rounded-full animate-float-3"></div>
          </div>

          {/* Logo */}
          <div className="mb-8 animate-fade-in relative z-20">
            <img 
              src="/images/longevityforev.png" 
              alt="Longevity Forever" 
              className="h-24 w-auto mb-8 animate-fade-in"
            />
          </div>

          <div className="text-center max-w-4xl mx-auto animate-fade-in-delay relative z-20">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-charcoal mb-6 animate-fade-in-delay">
              Longevity Forever is<br />
              <span className="text-primary animate-pulse-text">Coming Soon</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/80 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
              Dubai&apos;s premier luxury wellness & longevity hub — opening soon.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Our Services Preview
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Discover the future of longevity and wellness through our comprehensive suite of services designed to optimize your health and extend your vitality.
            </p>
          </div>

          {/* Services Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <img 
              src="/images/image (1).png" 
              alt="Longevity Research Platform"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/images/image (2).png" 
              alt="Health Optimization Hub"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/images/image (3).png" 
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/images/image (4).png" 
              alt="Research & Development"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/images/image (5).png" 
              alt="Longevity Community"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src="/images/image (6).png" 
              alt="Wellness Services"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-charcoal">
            Opening In
          </h2>
          <div className="flex justify-center space-x-4 md:space-x-8">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.days}</div>
              <div className="text-sm md:text-base text-charcoal/70">Days</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.hours}</div>
              <div className="text-sm md:text-base text-charcoal/70">Hours</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.minutes}</div>
              <div className="text-sm md:text-base text-charcoal/70">Minutes</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.seconds}</div>
              <div className="text-sm md:text-base text-charcoal/70">Seconds</div>
            </div>
          </div>
        </div>
      </section>



      {/* Location Teaser */}
      <section className="py-32 px-4 bg-gradient-to-r from-primary/20 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFAF74' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            Located on the Palm, @ Royal Bay by AZIZI
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed">
            Opening doors soon — visit us to experience longevity redefined.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/images/longevityforev.png" 
                alt="Longevity Forever Logo"
                className="w-12 h-auto mr-3"
              />
              <div>
                <p className="font-playfair font-semibold text-charcoal">Longevity Forever</p>
                <p className="text-sm text-charcoal/70">Where Science Meets Serenity</p>
              </div>
            </div>
            
          </div>
          
          <div className="mt-8 pt-8 border-t border-charcoal/10 text-center">
            <p className="text-charcoal/60 text-sm">
              © 2024 Longevity Forever. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
