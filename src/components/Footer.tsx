import React from 'react';
import { Droplets, Shield, Trash2, Mail, Heart, ExternalLink } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
  onNavigateHome?: () => void;
  onNavigatePrivacyPolicy?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  theme, 
  onNavigateHome, 
  onNavigatePrivacyPolicy,
  onNavigateSection 
}) => {
  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigatePrivacyPolicy) {
      onNavigatePrivacyPolicy();
    } else {
      const el = document.getElementById('privacy-policy');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t transition-colors py-12 relative ${
      theme === 'dark' ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateHome) onNavigateHome();
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 mb-4 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-black text-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                HydroVibe
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
              Intelligent Android hydration tracking with Google Cloud Firestore sync, offline SQLite caching, and Gemini AI health insights.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-300">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact: Hydrovibe_support@hightechenterprise.xyz</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="#privacy-policy" 
                  onClick={handlePrivacyClick}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  Privacy Policy (Dedicated Page)
                </a>
              </li>
              <li>
                <a 
                  href="#data-deletion" 
                  onClick={(e) => handleSectionClick(e, 'data-deletion')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                  Account & Data Deletion
                </a>
              </li>
              <li>
                <a 
                  href="#support" 
                  onClick={(e) => handleSectionClick(e, 'support')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  Support & Contact SLA
                </a>
              </li>
            </ul>
          </div>

          {/* Application Features */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              HydroVibe Features
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>• Gemini AI Hydration Coach</li>
              <li>• Firebase Cloud Firestore Sync</li>
              <li>• Wear OS Smartwatch & Android Widgets</li>
              <li>• Encrypted SQLite Offline Database</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 HTE App Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="#privacy-policy" 
              onClick={handlePrivacyClick}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a 
              href="#data-deletion" 
              onClick={(e) => handleSectionClick(e, 'data-deletion')}
              className="hover:text-slate-300 transition-colors"
            >
              Data Deletion
            </a>
            <span>•</span>
            <a 
              href="#support" 
              onClick={(e) => handleSectionClick(e, 'support')}
              className="hover:text-slate-300 transition-colors"
            >
              Support Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
