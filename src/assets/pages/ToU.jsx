import { useState } from 'react';

import { FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="max-w-4xl mx-auto px-6 py-6 pt-32">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-cyan-500/20 rounded-lg">
            <FileText className="text-cyan-400" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-slate-400 mt-2">Last updated: July 4, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <p className="text-slate-300">
              By accessing and using this portfolio website, you accept and agree to be bound by these terms and conditions.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Use License</h2>
            <div className="text-slate-300 space-y-3">
              <p>You may view this website for personal use only. You may not:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use materials for commercial purposes</li>
                <li>Remove copyright notices</li>
                <li>Reverse engineer any software</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Disclaimer</h2>
            <div className="text-slate-300">
              <p>This website is provided "as is" without any warranties. We make no guarantees about the accuracy, completeness, or reliability of the content.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Limitations</h2>
            <div className="text-slate-300">
              <p>We shall not be liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, or consequential damages.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">User Conduct</h2>
            <div className="text-slate-300 space-y-3">
              <p>When using this website, you agree not to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Violate any applicable laws</li>
                <li>Transmit harmful code or malware</li>
                <li>Attempt unauthorized access</li>
                <li>Interfere with website functionality</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Changes to Terms</h2>
            <div className="text-slate-300">
              <p>We may update these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Information</h2>
            <div className="bg-slate-800 rounded-lg p-6">
              <p className="text-slate-300 mb-3">Questions about these Terms of Service:</p>
              <div className="space-y-1 text-slate-300">
                <p>Email: <span className="text-cyan-400">joshuasoyco@gmail.com</span></p>
                <p>Phone: <span className="text-cyan-400">+63 9066177270</span></p>
                <p>Location: <span className="text-cyan-400">Dagupan City, Pangasinan</span></p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsPage;