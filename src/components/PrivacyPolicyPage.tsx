import React, { useState, useEffect } from 'react';
import { 
  Shield, Lock, FileText, CheckCircle2, Search, ExternalLink, 
  Printer, Copy, Check, Mail, Database, Server, Smartphone, Key, 
  ArrowLeft, ChevronRight, HelpCircle, Trash2, Download, AlertCircle, 
  Sparkles, Calendar, UserCheck, ShieldCheck, Share2
} from 'lucide-react';
import { ThemeMode, PrivacySectionData } from '../types';

interface PrivacyPolicyPageProps {
  theme: ThemeMode;
  onNavigateHome: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ 
  theme, 
  onNavigateHome,
  onNavigateSection 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Privacy Policy - HydroVibe (Google Play Store Compliant)';
    return () => {
      document.title = 'HydroVibe - Smart Hydration & Water Tracker';
    };
  }, []);

  const handleCopyLink = () => {
    const url = window.location.origin + window.location.pathname + '#/privacy-policy';
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const sections: PrivacySectionData[] = [
    {
      id: 'section-1',
      number: 1,
      title: 'Information We Collect',
      content: 'HydroVibe collects necessary functional information to deliver intelligent water tracking, account synchronization, and personalized hydration targets.',
      subsections: [
        {
          heading: 'Account & Identity Data (Google Sign-In)',
          text: 'When you authenticate via Google Sign-In, our application securely receives essential tokenized identity metadata:',
          bullets: [
            'Google Account Unique Identifier (UID)',
            'User Display Name',
            'Registered Email Address',
            'Profile Picture URL (used strictly for in-app UI avatar rendering)',
          ],
        },
        {
          heading: 'Hydration & Personal Health Metrics',
          text: 'To compute accurate hydration targets, send intelligent reminders, and preserve historical tracking records, HydroVibe stores:',
          bullets: [
            'Water intake logs (timestamps, volume in ml/fl oz, container type)',
            'Body weight metrics (used exclusively for intake target volume calculations)',
            'Wake-up and sleep schedule hours (used for smart non-intrusive reminder timing)',
            'Physical exercise duration and climate/weather preferences',
          ],
        },
        {
          heading: 'Device & Technical Diagnostics',
          text: 'To ensure synchronization stability across Android releases (Android 10 through Android 15+), minimal non-identifying telemetry is processed:',
          bullets: [
            'Android OS version and device manufacturer model',
            'Network connectivity status (online vs offline state for SQLite local sync queue)',
            'Crash logs (anonymized system traces for bug fixes)',
          ],
        },
      ],
    },
    {
      id: 'section-2',
      number: 2,
      title: 'How We Use Information',
      content: 'Your data is strictly utilized to operate core tracking features, preserve multi-device sync, and generate personalized health insights.',
      subsections: [
        {
          heading: 'Core Operational Functions',
          text: 'We process your collected data solely for the following explicit workflows:',
          bullets: [
            'Google Sign-In Authentication: Validating user credentials without storing raw Google passwords.',
            'Firebase Cloud Firestore Sync: Real-time synchronization of water consumption logs across your smartphones, tablets, and Wear OS watches.',
            'Local Encrypted SQLite Caching: Storing logs locally on your device for immediate offline access without internet connectivity.',
            'Gemini AI Health Tips: Processing contextual ambient parameters (e.g. ambient temperature, activity) to formulate intelligent daily hydration advice.',
          ],
        },
        {
          heading: 'Strict Prohibition on Data Sale or Brokering',
          text: 'HTE App Studio strictly DOES NOT sell, rent, monetize, or trade your personal health records, weight metrics, intake history, or email address to third-party data brokers, marketers, or data syndicates.',
        },
      ],
    },
    {
      id: 'section-3',
      number: 3,
      title: 'Third-Party Services & Google Cloud Infrastructure',
      content: 'HydroVibe relies exclusively on verified Google Cloud enterprise infrastructure and Google Play services to ensure maximum security.',
      subsections: [
        {
          heading: 'Integrated Service Providers',
          text: 'The app interacts with the following verified Google developer services:',
          bullets: [
            'Google Sign-In & Firebase Authentication: Handles secure OAuth 2.0 token exchanges.',
            'Google Cloud Firestore: Enterprise NoSQL cloud database providing automatic failover and cloud backup.',
            'Google Gemini AI API: Analyzes anonymized contextual prompts for smart hydration advice generation.',
            'Google AdMob: May display contextual, non-personalized banner advertisements in the free tier of the application.',
          ],
        },
      ],
    },
    {
      id: 'section-4',
      number: 4,
      title: 'Data Retention & Security Architecture',
      content: 'We employ multi-tiered cryptographic safeguards to protect your personal metrics in transit and at rest.',
      subsections: [
        {
          heading: 'Cryptographic Standards',
          text: 'All communications between the HydroVibe Android client and Google Cloud Firestore are encrypted using Transport Layer Security (TLS 1.3). All database records stored in Google Cloud are secured with AES-256 bit encryption at rest.',
        },
        {
          heading: 'Offline-First Local Sandboxing',
          text: 'Local device records are stored inside Android App Internal Storage using an encrypted SQLite database. Android application sandboxing strictly prevents other apps from accessing your database files.',
        },
        {
          heading: 'Retention Period',
          text: 'Your data is retained for as long as your account remains active. If you initiate account deletion, all cloud and local records are purged permanently according to Section 5.',
        },
      ],
    },
    {
      id: 'section-5',
      number: 5,
      title: 'Account Data Deletion Rights (Google Play Requirement)',
      content: 'In compliance with Google Play Store User Data Policies, you have the absolute right to request and execute permanent deletion of your account and all associated metrics.',
      subsections: [
        {
          heading: 'Option A: Instant In-App Deletion',
          text: 'You can immediately delete your account directly from your Android device:',
          bullets: [
            'Step 1: Open HydroVibe and tap the Settings gear icon.',
            'Step 2: Navigate to Account & Security > Security Controls.',
            'Step 3: Tap "Delete Account & Purge Cloud Data".',
            'Step 4: Confirm Google Sign-In re-authentication. Your Firestore documents and local cache are wiped instantly.',
          ],
        },
        {
          heading: 'Option B: Web-Based Data Deletion Request',
          text: 'If you have uninstalled the application or cannot access your device, you can submit a deletion request via our online form or by emailing Hydrovibe_support@hightechenterprise.xyz with your registered Google Account email address. Web deletion requests are processed within 24 to 48 business hours.',
        },
      ],
    },
    {
      id: 'section-6',
      number: 6,
      title: "Children's Privacy Protection (COPPA / GDPR-K)",
      content: 'HydroVibe is designed for the general public and does not knowingly collect or solicit personal information from children under 13 years of age (or the relevant age threshold in your jurisdiction). If we discover that personal data from a child under 13 has been collected without verified parental consent, we immediately purge all corresponding records from our servers.',
    },
    {
      id: 'section-7',
      number: 7,
      title: 'Legal Contact & Developer Information',
      content: 'For questions, feedback, or legal inquiries regarding this Privacy Policy or your data protection rights, please contact the developer:',
      subsections: [
        {
          heading: 'Developer Contact Details',
          text: 'Developer Entity: HTE App Studio\nApplication: HydroVibe - Smart Hydration & Water Tracker\nSupport & Privacy Email: Hydrovibe_support@hightechenterprise.xyz\nResponse Time Commitment: Within 24-48 business hours\nGoverning Frameworks: Google Play Developer Distribution Agreement, GDPR, CCPA / CPRA',
        },
      ],
    },
  ];

  const filteredSections = sections.filter((sec) => {
    const query = searchQuery.toLowerCase();
    if (!query) return true;
    return (
      sec.title.toLowerCase().includes(query) ||
      sec.content.toLowerCase().includes(query) ||
      sec.subsections?.some(
        (sub) =>
          sub.heading.toLowerCase().includes(query) ||
          sub.text.toLowerCase().includes(query) ||
          sub.bullets?.some((b) => b.toLowerCase().includes(query))
      )
    );
  });

  return (
    <div className="pt-24 pb-20 lg:pt-28 lg:pb-32 relative">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Breadcrumb & Back Button Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-medium">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400 font-semibold">Official Privacy Policy</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all"
              title="Copy shareable link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share Policy URL'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all"
              title="Print policy document"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Google Play Developer Policy Document</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            HydroVibe{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            This official Privacy Policy describes how HydroVibe ("we", "our", or "the app"), developed by HTE App Studio, collects, uses, encrypts, and deletes your information.
          </p>
        </div>

        {/* Metadata Quick-Info Card */}
        <div className={`p-6 rounded-2xl border mb-12 shadow-lg ${
          theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-sky-200'
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="text-slate-400 block font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                Effective Date
              </span>
              <span className="font-bold text-cyan-400 text-sm mt-0.5 block">August 9, 2026</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                Application
              </span>
              <span className={`font-bold text-sm mt-0.5 block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                HydroVibe Tracker
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                Developer
              </span>
              <span className={`font-bold text-sm mt-0.5 block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                HTE App Studio
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                Legal Inquiries
              </span>
              <a 
                href="mailto:Hydrovibe_support@hightechenterprise.xyz" 
                className="font-bold text-cyan-400 hover:underline truncate block mt-0.5"
              >
                Hydrovibe_support@hightechenterprise.xyz
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className={`p-5 rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-sky-100'}`}>
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">TLS 1.3 & AES-256</h4>
            <p className="text-xs text-slate-400">All data encrypted in transit and at rest in Google Cloud Firestore.</p>
          </div>

          <div className={`p-5 rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-sky-100'}`}>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">Zero Data Selling</h4>
            <p className="text-xs text-slate-400">We never sell or rent your personal health logs or metrics to third parties.</p>
          </div>

          <div className={`p-5 rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-sky-100'}`}>
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">Offline-First SQLite</h4>
            <p className="text-xs text-slate-400">Local database caching gives you instant access without requiring internet.</p>
          </div>

          <div className={`p-5 rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-sky-100'}`}>
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-3">
              <Trash2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">1-Tap Data Purge</h4>
            <p className="text-xs text-slate-400">Permanent data deletion directly in Settings or via our web form.</p>
          </div>
        </div>

        {/* Search Filter Bar */}
        <div className="relative mb-10 max-w-2xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Policy Clauses (e.g. Google Sign-In, AdMob, Gemini AI, Delete, SQLite, TLS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 shadow-inner'
                : 'bg-white border-sky-200 text-slate-900 placeholder-slate-400 shadow-sm'
            }`}
          />
        </div>

        {/* Main Document Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Quick Navigation Index */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className={`sticky top-28 p-6 rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-sky-100 shadow-sm'
            }`}>
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 text-cyan-400 flex items-center gap-2`}>
                <FileText className="w-4 h-4" />
                Document Sections
              </h3>
              <nav className="space-y-1.5">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all group"
                  >
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/10 text-cyan-400 text-[10px] font-extrabold flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      {sec.number}
                    </span>
                    <span className="truncate">{sec.title}</span>
                  </a>
                ))}
              </nav>

              {/* Quick links to Data Deletion and Support */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-2">
                <button
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => {
                      document.getElementById('data-deletion')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    Data Deletion Request
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => {
                      document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
                    Contact Support
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Full Clause Cards */}
          <div className="lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="p-10 text-center rounded-3xl border border-slate-800 text-slate-400 bg-slate-900/40">
                <AlertCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2 opacity-60" />
                <p className="text-sm font-semibold">No policy clauses match your search query "{searchQuery}".</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs text-cyan-400 hover:underline font-bold"
                >
                  Clear search filter
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-sky-100 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-cyan-400 flex items-center justify-center font-extrabold text-sm border border-cyan-500/30 shrink-0">
                      {sec.number}
                    </div>
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      Section {sec.number}: {sec.title}
                    </h2>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    {sec.content}
                  </p>

                  {sec.subsections?.map((sub, idx) => (
                    <div key={idx} className="mt-5 pt-5 border-t border-slate-800/60">
                      <h3 className={`text-sm font-extrabold mb-2 ${theme === 'dark' ? 'text-cyan-300' : 'text-sky-800'}`}>
                        {sub.heading}
                      </h3>
                      <p className={`text-xs leading-relaxed mb-3 whitespace-pre-line ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {sub.text}
                      </p>
                      {sub.bullets && (
                        <ul className="space-y-2 ml-1">
                          {sub.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </article>
              ))
            )}

            {/* Bottom Actions Banner */}
            <div className={`p-6 sm:p-8 rounded-3xl border bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6`}>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Need to delete your account or submit a request?</h4>
                <p className="text-xs text-slate-400">Access our direct data deletion instructions or contact our dedicated support team.</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => {
                      document.getElementById('data-deletion')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-500 hover:bg-rose-600 text-white transition-colors text-center"
                >
                  Data Deletion
                </button>
                <button
                  onClick={onNavigateHome}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-center"
                >
                  Return to Home
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
