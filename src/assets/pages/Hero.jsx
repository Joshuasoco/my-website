import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Star, Shield, Zap, Users, Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from "lucide-react";

// Motion Component (simplified version)
const Motion = ({ children, initial, animate, transition, whileInView, viewport, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref || !whileInView) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && viewport?.once) {
          setIsVisible(true);
          observer.disconnect();
        } else if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!viewport?.once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, whileInView, viewport]);

  useEffect(() => {
    if (animate && !whileInView) {
      const timer = setTimeout(() => setIsVisible(true), (transition?.delay || 0) * 1000);
      return () => clearTimeout(timer);
    }
  }, [animate, whileInView, transition]);

  const motionStyle = {
    opacity: isVisible ? (animate?.opacity ?? 1) : (initial?.opacity ?? 1),
    transform: `translateY(${isVisible ? (animate?.y ?? 0) : (initial?.y ?? 0)}px) scale(${isVisible ? (animate?.scale ?? 1) : (initial?.scale ?? 1)})`,
    transition: `all ${transition?.duration || 0.5}s ease-out`,
  };

  return (
    <div 
      ref={setRef} 
      className={className} 
      style={motionStyle}
      {...props}
    >
      {children}
    </div>
  );
};

// Aurora Component (simplified version)
const Aurora = ({ colorStops, blend, amplitude, speed }) => {
  return (
    <div className="absolute inset-0 opacity-30">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-400 animate-pulse"
        style={{
          background: `linear-gradient(45deg, ${colorStops.join(', ')})`,
          filter: 'blur(80px)',
          transform: 'scale(1.2)',
        }}
      />
    </div>
  );
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Safe",
      description: "Your data is protected with enterprise-grade security measures"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using powerful collaboration tools"
    }
  ];

  return (
    <div className="relative bg-black">
      {/* Sticky Navigation */}
      {showContent && (
        <Motion
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`
            fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}
            px-4 py-4 lg:px-8
          `}
        >
          <nav className={`
            w-full lg:w-[90%] 
            h-[60px] lg:h-[70px]
            ${scrolled ? 'bg-cyan-400/95' : 'bg-cyan-400'}
            text-white 
            lg:rounded-full
            flex 
            items-center 
            justify-between
            mx-auto
            px-4 lg:px-6
            transition-all duration-300 ease-in-out
            shadow-lg
            ${scrolled ? 'shadow-cyan-400/20' : ''}
          `}>
            <a
              href="#"
              className="px-2 text-lg lg:text-xl tracking-widest cursor-pointer font-bold"
              style={{ fontFamily: "Zen Dots, sans-serif" }}
            >
              GEMS
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
              {[
                { label: "Why Gems", to: "#why" },
                { label: "Features", to: "#features" },
                { label: "Pricing", to: "#pricing" },
              ].map(({ label, to }) => (
                <a
                  key={label}
                  href={to}
                  className="text-white/90 font-medium hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </ul>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex gap-3">
              <a
                href="/login"
                className="px-5 py-2 text-sm lg:text-base text-white font-semibold rounded-full tracking-wide hover:bg-white/10 transition-all duration-200"
              >
                Login
              </a>
              <a
                href="/signup"
                className="
                  bg-white
                  text-sm lg:text-base
                  text-cyan-500 
                  font-semibold 
                  px-4 
                  py-2
                  rounded-full 
                  border 
                  border-cyan-500
                  hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.6)]
                  transition-all duration-200
                  tracking-wide
                  transform hover:scale-105
                "
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white ml-2 relative z-50 p-2 hover:bg-white/10 rounded-full transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Motion>
      )}

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-md z-40 lg:hidden">
          <div className="pt-20 px-6 flex flex-col items-start gap-8">
            {[
              { label: "Why Gems", to: "#why" },
              { label: "Features", to: "#features" },
              { label: "Pricing", to: "#pricing" }
            ].map(({ label, to }, index, arr) => (
              <React.Fragment key={label}>
                <div
                  style={{
                    opacity: 1,
                    transform: 'translateX(0px)',
                    transition: `all 0.4s ease-out ${index * 0.1}s`
                  }}
                >
                  <a
                    href={to}
                    className="text-2xl font-medium text-white hover:text-cyan-400 transition-all duration-200 block py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </div>
                {index < arr.length - 1 && (
                  <hr 
                    style={{
                      transform: 'scaleX(1)',
                      transformOrigin: 'left',
                      transition: `transform 0.3s ease-out ${(index + 1) * 0.1}s`
                    }}
                    className="w-full border-t border-white/20" 
                  />
                )}
              </React.Fragment>
            ))}

            <div className="h-6"></div>

            {[
              { label: "Login", to: "/login" },
              { label: "Sign Up", to: "/signup" }
            ].map(({ label, to }, index) => (
              <div
                key={label}
                style={{
                  opacity: 1,
                  transform: 'translateX(0px)',
                  transition: `all 0.4s ease-out ${(index + 4) * 0.1}s`
                }}
              >
                <a
                  href={to}
                  className={`
                    text-lg font-semibold transition-all duration-200 block py-2 px-4 rounded-full
                    ${label === 'Sign Up' 
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300' 
                      : 'text-white hover:text-cyan-400 border border-white/30 hover:border-cyan-400'
                    }
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <Aurora
          colorStops={["#00CAFF", "#00CAFF", "#00FFDE"]}
          blend={0.5}
          amplitude={1.5}
          speed={0.5}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <Motion
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                GEMS
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover the future of digital excellence with our cutting-edge platform designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold px-8 py-4 rounded-full hover:shadow-[0_0_20px_8px_rgba(0,202,255,0.3)] transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </Motion>
        </div>

        {/* Scroll Indicator */}
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll down</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </Motion>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <Motion
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-cyan-400">GEMS</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the power of innovation with features designed for the modern world
            </p>
          </Motion>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Motion
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Motion
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with GEMS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold px-8 py-4 rounded-full hover:shadow-[0_0_20px_8px_rgba(0,202,255,0.3)] transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </Motion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Zen Dots, sans-serif" }}>
                GEMS
              </h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Transforming businesses with cutting-edge technology and innovative solutions. 
                Your success is our mission.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Github size={20} />, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#" },
                  { label: "Features", href: "#features" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Contact", href: "#contact" },
                  { label: "Blog", href: "#" }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-3 text-cyan-400" />
                  <span>hello@gems.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-3 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-3 text-cyan-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 GEMS. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}