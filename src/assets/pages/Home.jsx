import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animate, AnimatePresence, motion, scale, press } from "framer-motion";
import Aurora from "../components/Aurora";
import { Badge, Menu, Target, X } from "lucide-react";
import { Mail, Phone, MapPin } from 'lucide-react';  
import LogoSlider from "../components/LogoSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoContact from "../components/Contactinfo";
import FormContact from "../components/ContactForm";
import Mockup from '../components/images/Mockup.png';
import Mockhk from '../components/images/hkmodalpic.jpeg';
import MockPt from '../components/images/PTABLe.jpeg';
import Ptable from '../components/images/periodictables.png';
import Hkmock from '../components/images/hk.png';
import Modal from '../components/ui/Modal';
import Smeow from '../components/images/smeow.png';
import { Star, GitFork } from "lucide-react";
import { Github } from 'lucide-react';
import { TypeAnimation } from "react-type-animation";


const project = [
  {
    id:1,
    title: "HK Duty Tracker",
    description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management.",
    technologies: ["Php", "MySQL", "Html+Css", "Javascript"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    stars: 42,
    forks: 12,
    featured: true
  },
  {
    id:2,
    title: "MeowRio",
    description: "Meowrio is a 2D platformer game inspired by the classic Mario series. Players control a cat character, navigating through levels filled with obstacles. The objective is to collect the fish at the end of each level",
    technologies: ["C#", "Mysql", "Unity", "Pixilart"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    stars: 42,
    forks: 12,
    featured: true
  },
 {
  id: 3,
  title: "The Periodic Table",
  description:
    "A Periodic Table game featuring three distinct categories:\n" +
    "- Quiz Challenge: Answer questions using a multiple-choice format\n" +
    "- Element Combos: Match and combine elements logically\n" +
    "- Identification Mode: Type the correct element name based on given clues",
  technologies: ["Java", "Java Swing", "Netbeans"],
  githubUrl: "https://github.com/yourusername/ecommerce-platform",
  stars: 42,
  forks: 12,
  featured: true
}

]
export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  
  useEffect(() => {
    const cancel = press(".project-card", (el)   => {
      animate(el, { scale: 0.9 });

      return () => animate(el, { scale: 1 });
    });

    return () => cancel(); 
  }, []);
  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);


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
    <div className="relative w-full min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Hero Section with Aurora */}
      <section className="relative h-screen">
        {/* Aurora confined to hero section */}
        <div className="absolute inset-0">
          <Aurora
            colorStops={["#00CAFF", "#00CAFF", "#00FFDE"]}
            blend={0.5}
            amplitude={1.5}
            speed={0.5}
          />
        </div>

        {/* Hero Content */}
        <div id="home" className="relative h-full flex items-center justify-center min-h-screen px-4">
        <motion.div 
          className="text-white text-center font-bold tracking-wider leading-tight 
          text-3xl sm:text-3xl md:text-5xl mb-20 sm:mt-20 md:mt-32 
          transition-all duration-500 ease-out"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 2.5,duration: 1, ease: 'easeOut' }}
        >
          <div style={{ fontFamily: "Lexend, sans-serif" }}>Welcome to My Web!</div>
          <p className="text-white/60 text-sm sm:text-base tracking-wide mt-6 sm:mt-4 px-12 sm:px-0 transition-all duration-500 ease-out">
            Passionate front-end developer who loves designing websites and  truly
            <br />
            enjoys the creative process!
          </p>

          
          <a
          href={import.meta.env.BASE_URL + 'assets/RESUME.pdf'}
          download="Resume_Josh.pdf"
          className={`
            inline-block
            mt-10 sm:mt-16 md:mt-24
            bg-white
            text-base sm:text-lg md:text-xl
            text-cyan-500 
            font-semibold 
            px-6 sm:px-7 md:px-8
            py-3 sm:py-4 md:py-5
            rounded-full 
            hover:cursor-pointer
            hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]
            transition-all duration-500 ease-in-out
            tracking-wide
          `}
        >
          Download Resume
        </a>

        </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 2 }}
          className="absolute bottom-16 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 transition-all duration-500 ease-in-out"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll down</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
        
      </section>

      {/* Navigation - Keep it on top */}
      {showContent && (
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}

      {/* Mobile Menu Overlay - Full Screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              fixed 
              top-0
              left-0 
              w-full 
              h-full 
              bg-black/80 
              backdrop-blur-sm 
              z-20
              lg:hidden
            "
          >
            {/* Menu Content Container - below navbar */}
            <div className="
              absolute 
              top-[94px] 
              left-0 
              w-full 
              h-[calc(100vh-94px)] 
              flex 
              flex-col 
              items-start 
              pt-7
              px-8 
              gap-6
            ">
              {/* Navigation Links with dividers */}
              {navigationLinks.map(({ label, to }, index, arr) => (
                <React.Fragment key={label}>
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -30, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={to}
                      className="text-3xl font-medium text-white hover:text-cyan-400 transition-all duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(to);
                        if (element) {
                          element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                        setMenuOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                  
                  {/* Divider between navigation items */}
                  {index < arr.length - 1 && (
                    <motion.hr 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                      className="w-full border-t border-white/20 origin-left" 
                    />
                  )}
                </React.Fragment>
              ))}

              {/* Spacer */}
              <div className="h-4"></div>

              {/* Auth Links */}
              {authLinks.map(({ label, to }, index) => (
                <motion.div
                  key={label}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (index + 4) * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={to}
                    className="text-lg font-semibold text-white hover:text-cyan-400 transition-all duration-200"
                    onClick={(e) => {
                      if (to.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(to);
                        if (element) {
                          element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }
                      setMenuOpen(false);
                    }}
                  > 
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Techstacks */}
      <section id="techstacks" className="relative overflow-x-hidden">
        <section className="min-h-screen">
          <div className="w-full lg:w-[80%] mx-auto px-4 py-24 bg-transparent">
            <LogoSlider />
          </div>
        </section>

        {/* Project Section */}
        <section id="projects" className="min-h-screen bg-cyan-950">
          <div className="w-full lg:w-[80%] mx-auto px-4 py-24">
          {/* TITLE PO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'My Projects', 2000,
                'Front-End Developer', 2000,
                'Donut Lover', 2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-3xl font-bold text-white mb-10 text-center"
            />
          </motion.div>
            <div className="p-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Project 1 */}
                <div 
                className="project-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={() =>
                {
                  setSelectedProject(project[0]);
                  setModalOpen(true)
                }}
                >
                <img 
                src={Mockhk} 
                alt="project 1" 
                className="w-full h-full transition-opacity hover:opacity-85"
                />
                </div>
                {/* Project 2 */}
                <div 
                  className="project-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                  onClick={() =>
                  {
                    setSelectedProject(project[1]);
                    setModalOpen(true)
                  }}
                  >
                    <img 
                    src={Mockup} 
                    alt="project 2" 
                    className="w-full h-full transition-opacity hover:opacity-85" 
                    />
                </div>
                {/* Project 3 */}
                <div 
                  className="project-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    const selectedProj = project.find(p => p.id === 3);
                    if (selectedProj) {
                      setSelectedProject(selectedProj);
                      setModalOpen(true);
                    }
                  }}
                  >
                  <img src={MockPt} alt="project 1" className="w-full h-full object-cover" />
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                  {selectedProject && (
                    <>
                      <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
                      <img
                        src={
                          selectedProject.id === 1
                            ? Hkmock
                            : selectedProject.id === 2
                            ? Smeow
                            : selectedProject.id === 3
                            ? Ptable
                            : Mockup
                            
                        }
                        alt={selectedProject.title}
                        className="object-cover w-full rounded-lg border-2 border-solid border-cyan-200"
                      />
                      <p className="text-gray-600 mt-4">{selectedProject.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* Stats */}
                      <div className="mt-4 flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          <span>{selectedProject.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          <span>{selectedProject.forks}</span>
                        </div>
                      </div>
                      <div className="w-full mt-6">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span className="text-sm font-medium">View on GitHub</span>
                        </a>
                      </div>
                    </>
                  )}
                </Modal>
              </div>
            </div>
            </div>
        </section>

        {/* Contact  Section */}
        <section id="contact" className="min-h-screen bg-black from-blue-50 via-white to-purple-50">
          <div className="w-full lg:w-[80%] mx-auto px-4 py-24">
              
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Get In <span className="text-blue-600">Touch</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Have a question or want to work together? I'd love to hear from you.
                  Send me a message and I'll respond as soon as possible.
                </p>
              </div>

              {/* Main Content */}
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h2>
                  <FormContact />
                </div>
                {/* Contact Information */}
                <div className="space-y-8">
                  <InfoContact />
                  {/* Quick Contact Cards */}
                  <div className="grid gap-4">
                    {/* Email Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Email Me</h3>
                          <p className="text-gray-600">joshuasoyco@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    {/* Phone Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Call Me</h3>
                          <p className="text-gray-600">+63 9066177270</p>
                        </div>
                      </div>
                    </div>
                    {/* Location Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <MapPin className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Visit Me</h3>
                          <p className="text-gray-600">Dagupan City, Pangasinan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </section>
      <Footer/>
    </div>
  );
}