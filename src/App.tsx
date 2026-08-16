import React, { useState, useEffect, useCallback } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { DataDeletion } from './components/DataDeletion';
import { SupportFAQ } from './components/SupportFAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy-policy'>('home');

  // Detect URL routing (Pathname, Hash, and Search Params)
  const checkRoute = useCallback(() => {
    const hash = window.location.hash.toLowerCase();
    const pathname = window.location.pathname.toLowerCase();
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = searchParams.get('page')?.toLowerCase();

    if (
      hash === '#/privacy-policy' || 
      hash === '#/privacy' || 
      hash === '#privacy-policy' || 
      pathname.endsWith('/privacy-policy') || 
      pathname.endsWith('/privacy') ||
      pageParam === 'privacy' ||
      pageParam === 'privacy-policy'
    ) {
      setCurrentPage('privacy-policy');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    } else {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, [checkRoute]);

  // Track active scroll section when on home page
  useEffect(() => {
    if (currentPage !== 'home') return;

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
  }, [currentPage]);

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrivacyPolicy = () => {
    setCurrentPage('privacy-policy');
    window.history.pushState(null, '', '#/privacy-policy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.history.pushState(null, '', `#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation Bar */}
      <Navbar 
        theme={theme} 
        setTheme={setTheme} 
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigatePrivacyPolicy={navigateToPrivacyPolicy}
        onNavigateSection={navigateToSection}
      />

      <main className="relative">
        {currentPage === 'privacy-policy' ? (
          /* Dedicated Standalone Privacy Policy Page */
          <PrivacyPolicyPage 
            theme={theme} 
            onNavigateHome={navigateToHome}
            onNavigateSection={navigateToSection}
          />
        ) : (
          /* Main Single-Page Website Layout (As it is) */
          <>
            {/* Section 1: Hero */}
            <Hero theme={theme} />

            {/* Section 2: Features & Hydration Calculator */}
            <Features theme={theme} />

            {/* Section 3: Google Play Store Compliant Privacy Policy */}
            <PrivacyPolicy 
              theme={theme} 
              onOpenDedicatedPage={navigateToPrivacyPolicy}
            />

            {/* Section 4: Account & Data Deletion Instructions */}
            <DataDeletion theme={theme} />

            {/* Section 5: Support & Contact FAQ */}
            <SupportFAQ theme={theme} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        theme={theme} 
        onNavigateHome={navigateToHome}
        onNavigatePrivacyPolicy={navigateToPrivacyPolicy}
        onNavigateSection={navigateToSection}
      />
    </div>
  );
}
