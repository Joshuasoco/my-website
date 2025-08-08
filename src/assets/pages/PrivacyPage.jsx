import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PrivacyPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-gray-900 ">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="pt-32 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-white">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-cyan-500/20 rounded-lg">
              <Shield className="text-cyan-400" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-slate-400 mt-2">Last updated: June 30, 2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <p className="text-slate-300">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit this portfolio website.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Information We Collect</h2>
              <div className="text-slate-300 space-y-3">
                <p>When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Browser information and IP address</li>
                  <li>How you interact with our site</li>
                  <li>Cookies for site functionality</li>
                </ul>
                <p>When you contact us, we collect your name, email, and message content.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How We Use Your Information</h2>
              <div className="text-slate-300 space-y-3">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Respond to your inquiries</li>
                  <li>Improve our website</li>
                  <li>Analyze site usage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Information Sharing</h2>
              <div className="text-slate-300">
                <p>We do not sell or share your personal information with third parties, except when required by law or with your explicit consent.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Your Rights</h2>
              <div className="text-slate-300 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Us</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <p className="text-slate-300 mb-3">If you have questions about this Privacy Policy:</p>
                <div className="space-y-1 text-slate-300">
                  <p>Email: <span className="text-cyan-400">joshuasoyco@gmail.com</span></p>
                  <p>Phone: <span className="text-cyan-400">+63 9066177270</span></p>
                  <p>Location: <span className="text-cyan-400">Dagupan City, Pangasinan</span></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;