import React, { useState, useEffect } from 'react';
import { Droplets, Shield, Trash2, HelpCircle, Sparkles, Menu, X, Moon, Sun, Download, ChevronRight, Home } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  activeSection: string;
  currentPage?: 'home' | 'privacy-policy';
  onNavigateHome?: () => void;
  onNavigatePrivacyPolicy?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  theme, 
  setTheme, 
  activeSection,
  currentPage = 'home',
  onNavigateHome,
  onNavigatePrivacyPolicy,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', id: 'features', icon: Sparkles, type: 'section' },
    { name: 'Privacy Policy', id: 'privacy-policy', icon: Shield, type: 'page' },
    { name: 'Data Deletion', id: 'data-deletion', icon: Trash2, type: 'section' },
    { name: 'Support', id: 'support', icon: HelpCircle, type: 'section' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.type === 'page' && link.id === 'privacy-policy') {
      if (onNavigatePrivacyPolicy) {
        onNavigatePrivacyPolicy();
      } else {
        const el = document.getElementById('privacy-policy');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (onNavigateSection) {
      onNavigateSection(link.id);
    } else {
      const el = document.getElementById(link.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage === 'privacy-policy'
          ? theme === 'dark'
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3'
            : 'bg-white/85 backdrop-blur-xl border-b border-sky-200/80 shadow-md shadow-sky-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Droplets className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                HydroVibe
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase ${theme === 'dark' ? 'text-cyan-300/70' : 'text-sky-700'}`}>
                Smart Hydration
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 p-1.5 rounded-full border border-slate-700/50 bg-slate-900/40 backdrop-blur-md">
            {currentPage === 'privacy-policy' && (
              <button
                onClick={onNavigateHome}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                <Home className="w-3.5 h-3.5 text-cyan-400" />
                <span>Home</span>
              </button>
            )}

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPage === 'privacy-policy' 
                ? link.id === 'privacy-policy'
                : activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                      : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-sky-100/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Switcher */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-700/60 text-amber-400 hover:bg-slate-800'
                  : 'bg-sky-50 border-sky-200 text-slate-700 hover:bg-sky-100'
              }`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Google Play CTA */}
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage === 'privacy-policy') {
                  if (onNavigateHome) onNavigateHome();
                  setTimeout(() => {
                    document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Get HydroVibe</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg border ${
                theme === 'dark' ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-sky-50 border-sky-200 text-slate-700'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                theme === 'dark' ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-sky-50 border-sky-200 text-slate-800'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-3 p-4 rounded-2xl border backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 ${
              theme === 'dark' ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white/95 border-sky-100 text-slate-900'
            }`}
          >
            <div className="flex flex-col gap-2">
              {currentPage === 'privacy-policy' && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateHome) onNavigateHome();
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    theme === 'dark' ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-sky-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Home className="w-4 h-4" />
                    </div>
                    <span>Home Page</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              )}

              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavLinkClick(e, link)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                      theme === 'dark' ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-sky-50 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}

              <div className="pt-2 border-t border-slate-800 mt-2">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (currentPage === 'privacy-policy') {
                      if (onNavigateHome) onNavigateHome();
                      setTimeout(() => {
                        document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download HydroVibe
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
