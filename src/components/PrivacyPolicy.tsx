import React, { useState } from 'react';
import { Shield, Lock, FileText, CheckCircle2, Search, ExternalLink, Printer, Copy, Check, Mail, Database, Server, Smartphone, Key } from 'lucide-react';
import { ThemeMode, PrivacySectionData } from '../types';

interface PrivacyPolicyProps {
  theme: ThemeMode;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ theme }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href.split('#')[0] + '#privacy-policy');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
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
          heading: 'Account & Identity Data',
          text: 'When you authenticate via Google Sign-In, we receive basic identity information:',
          bullets: [
            'Google Account Identifier (UID)',
            'Display Name',
            'Email Address',
            'Profile Picture URL (for app display only)',
          ],
        },
        {
          heading: 'Hydration & Personal Health Metrics',
          text: 'To calculate accurate hydration targets and store your intake history, HydroVibe records:',
          bullets: [
            'Water intake logs (timestamps, volume in ml/oz, container type)',
            'Body weight (used exclusively for intake target calculations)',
            'Wake-up and sleep schedule hours (used for smart notification timing)',
            'Physical activity levels and daily climate preferences',
          ],
        },
      ],
    },
    {
      id: 'section-2',
      number: 2,
      title: 'How We Use Information',
      content: 'Your data is strictly used for core application functionality, seamless multi-device synchronization, and delivering personalized health insights.',
      subsections: [
        {
          heading: 'Core Functional Purposes',
          text: 'We utilize your information for the following specific operational workflows:',
          bullets: [
            'Google Sign-In Authentication: Authenticating your account identity across Android devices.',
            'Firebase Cloud Firestore Sync: Synchronizing your water consumption logs across your smartphones and tablets.',
            'Local Encrypted Caching: Storing logs in an offline-first SQLite database on your device for immediate offline access.',
            'Gemini AI Health Tips: Processing ambient weather and activity data to generate personalized daily hydration advice.',
          ],
        },
        {
          heading: 'No Data Monetization or Sale',
          text: 'HTE App Studio strictly DOES NOT sell, rent, lease, or trade your personal health logs, weight metrics, or email address to third-party data brokers, marketers, or advertisers.',
        },
      ],
    },
    {
      id: 'section-3',
      number: 3,
      title: 'Third-Party Services',
      content: 'HydroVibe integrates industry-standard Google Cloud and Android SDKs to maintain maximum security and reliability.',
      subsections: [
        {
          heading: 'Integrated Service Providers',
          text: 'The app interacts with the following verified third-party Google services:',
          bullets: [
            'Google Sign-In & Firebase Authentication: Handles secure passwordless tokenized sign-in.',
            'Google Cloud Firestore: Secure NoSQL database for real-time cloud backup.',
            'Google Gemini AI API: Processes anonymized contextual prompts (e.g., temperature and activity) for smart tip generation.',
            'Google AdMob: May display non-intrusive contextual banner advertisements in the free tier of the application.',
          ],
        },
      ],
    },
    {
      id: 'section-4',
      number: 4,
      title: 'Data Retention & Security',
      content: 'We employ multi-layered cryptographic standards to protect your health logs both in transit and at rest.',
      subsections: [
        {
          heading: 'Encryption Standards',
          text: 'All data transmitted between the HydroVibe Android client and Google Cloud Firestore is encrypted using TLS 1.3 protocol. Stored cloud records are protected with AES-256 encryption at rest.',
        },
        {
          heading: 'Offline-First Local Storage',
          text: 'Local device records are stored in an encrypted SQLite database on Android internal storage, inaccessible to other non-root applications.',
        },
      ],
    },
    {
      id: 'section-5',
      number: 5,
      title: 'Account Data Deletion Rights',
      content: 'You maintain full ownership of your data and possess the right to permanently purge your account and records at any time.',
      subsections: [
        {
          heading: 'In-App Account Deletion',
          text: 'You can immediately execute full data deletion directly within the app by opening Settings > Account & Security > Delete Account.',
        },
        {
          heading: 'Web Deletion Request',
          text: 'If you no longer have the app installed, you can submit a deletion request via our web form in the Data Deletion section below or by emailing Hydrovibe_support@hightechenterprise.xyz.',
        },
      ],
    },
    {
      id: 'section-6',
      number: 6,
      title: "Children's Privacy",
      content: 'HydroVibe does not knowingly collect or solicit personal data from children under 13 years of age. If we learn that we have collected personal information from a child under 13 without verified parental consent, we will delete that information immediately.',
    },
    {
      id: 'section-7',
      number: 7,
      title: 'Contact Information',
      content: 'If you have any questions, concerns, or requests regarding this Privacy Policy or your data privacy rights, please contact HTE App Studio:',
      subsections: [
        {
          heading: 'Developer Entity & Support Email',
          text: 'Developer: HTE App Studio\nEmail: Hydrovibe_support@hightechenterprise.xyz\nResponse SLA: Within 48 business hours',
        },
      ],
    },
  ];

  // Filter sections by search query
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
    <section id="privacy-policy" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Google Play Store Compliant Legal Terms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            HydroVibe{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Comprehensive information regarding data collection, encryption, third-party integrations, and user rights.
          </p>
        </div>

        {/* Info Card Bar */}
        <div className={`p-6 rounded-2xl border mb-10 flex flex-wrap items-center justify-between gap-4 ${
          theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-sky-200'
        }`}>
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Effective Date</span>
              <span className="font-bold text-cyan-400">August 9, 2026</span>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div>
              <span className="text-slate-400 block font-medium">App Name</span>
              <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>HydroVibe</span>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div>
              <span className="text-slate-400 block font-medium">Developer / Entity</span>
              <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>HTE App Studio</span>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div>
              <span className="text-slate-400 block font-medium">Support Email</span>
              <a href="mailto:Hydrovibe_support@hightechenterprise.xyz" className="font-bold text-cyan-400 hover:underline">
                Hydrovibe_support@hightechenterprise.xyz
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copiedLink ? 'Copied' : 'Copy Link'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Privacy Policy (e.g. Firebase, Delete, AdMob, Security)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500'
                : 'bg-white border-sky-200 text-slate-900 placeholder-slate-400'
            }`}
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Table of Contents */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className={`sticky top-28 p-6 rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-sky-100'
            }`}>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
              }`}>
                Table of Contents
              </h3>
              <ul className="space-y-2">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 py-1"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Privacy Content Cards */}
          <div className="lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border border-slate-800 text-slate-400">
                No policy sections match "{searchQuery}". Try searching for another keyword.
              </div>
            ) : (
              filteredSections.map((sec) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-sky-100 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-extrabold text-sm shrink-0">
                      {sec.number}
                    </div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      Section {sec.number}: {sec.title}
                    </h3>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    {sec.content}
                  </p>

                  {sec.subsections?.map((sub, idx) => (
                    <div key={idx} className="mt-4 pt-4 border-t border-slate-800/60">
                      <h4 className={`text-sm font-extrabold mb-2 ${theme === 'dark' ? 'text-cyan-300' : 'text-sky-800'}`}>
                        {sub.heading}
                      </h4>
                      <p className={`text-xs leading-relaxed mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {sub.text}
                      </p>
                      {sub.bullets && (
                        <ul className="space-y-1.5 ml-2">
                          {sub.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
