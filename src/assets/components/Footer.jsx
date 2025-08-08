import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, HandHeart, ArrowUp, Coffee } from 'lucide-react';

const PortfolioFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:joshuasoyco@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'TechStacks', href: '#techstacks' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-cyan-500 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-400 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl font-bold">J</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Juicewa Portfolio
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Passionate developer crafting digital experiences with creativity and precision. 
              Always learning, always building something amazing.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <MapPin size={18} />
                <span>Dagupan City, PH</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone size={18} />
                <span>+63 (09) 066177270</span>
              </div>
              <div className="flex items-center space-x-3 text-slate- hover:text-cyan-400">
                <Coffee size={18} />
                <span>Local time: {currentTime.toLocaleTimeString()}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-cyan-400">Connect</h4>
            
            {/* Social links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-cyan-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Mini newsletter signup */}
            <div className="space-y-3">
              <p className="text-sm text-slate-300">Stay updated with my latest work</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="j****@email.com"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg text-sm focus:outline-none focus:border-white transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-r-lg hover:from-cyan-600 hover:to-cyan-600 transition-all duration-200 text-sm font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-400 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-slate-300">
            <span>© 2025 JuiceWa. Made with</span>
            <HandHeart size={20} strokeWidth={3} className="text-red-400 animate-pulse" />
            <span>and lots of donuts</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms</a>
            <span>v1.0</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        } hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 hover:cursor-pointer`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-auto text-slate-800 opacity-50">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </footer>
  );
};

export default PortfolioFooter;