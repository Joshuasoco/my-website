import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navigationLinks = [
    { label: "Why Me", to: "#home" },
    { label: "Techstacks", to: "#techstacks" },
    { label: "Project", to: "#projects" },
  ];

  const authLinks = [
    { label: "FAQs", to: "/Faq" },
    { label: "Contact Me", to: "#contact" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      className="fixed top-0 w-full px-2 lg:px-6 py-8 z-50"
    >
      <div className="mt-[-10px] sm:mt-0 w-full lg:w-[80%] h-[65px] bg-cyan-400 backdrop-blur-md border border-white/20 shadow-lg text-white rounded-[64px] flex items-center justify-between mx-auto px-4 transition-all duration-400 ease-in-out">
        <a
          href='/'
          className="px-2 mt-1 text-xl tracking-widest cursor-pointer"
          style={{ fontFamily: "Zen Dots, sans-serif" }}
        >
          TITLE
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
        {navigationLinks.map(({ label, to }) => (
          to.startsWith("#") ? (
            <a
              key={label}
              href={to}
              className="text-white/85 font-medium hover:text-shadow-lg hover:text-white transition-all duration-200"
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              to={to}
              className="text-white/85 font-medium hover:text-shadow-lg hover:text-white transition-all duration-200"
            >
              {label}
            </Link>
          )
        ))}
        </ul>

        <div className="hidden lg:flex gap-5">
          <Link
            to="/faq"
            className="py-2 text-base text-white font-semibold rounded-full tracking-wide"
          >
            FAQs
          </Link>
          <a
            href='#contact'
            className="bg-white text-base text-cyan-500 font-semibold px-4 py-2 rounded-full border border-cyan-500 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] transition tracking-wide"
          >
            Contact Me
          </a>
        </div>

        <button
          className="lg:hidden text-white ml-2 relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.div>
  );
}
