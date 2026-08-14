import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { DataDeletion } from './components/DataDeletion';
import { SupportFAQ } from './components/SupportFAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'privacy-policy', 'data-deletion', 'support'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Fixed Sticky Header */}
      <Navbar theme={theme} setTheme={setTheme} activeSection={activeSection} />

      <main className="relative">
        {/* Section 1: Hero */}
        <Hero theme={theme} />

        {/* Section 2: Features & Hydration Calculator */}
        <Features theme={theme} />

        {/* Section 3: Google Play Store Compliant Privacy Policy */}
        <PrivacyPolicy theme={theme} />

        {/* Section 4: Account & Data Deletion Instructions */}
        <DataDeletion theme={theme} />

        {/* Section 5: Support & Contact FAQ */}
        <SupportFAQ theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
