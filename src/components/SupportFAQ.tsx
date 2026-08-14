import React, { useState } from 'react';
import { HelpCircle, Mail, MessageSquare, ChevronDown, Send, CheckCircle2, Smartphone, ShieldCheck, Cpu } from 'lucide-react';
import { ThemeMode, SupportTicketForm } from '../types';

interface SupportFAQProps {
  theme: ThemeMode;
}

export const SupportFAQ: React.FC<SupportFAQProps> = ({ theme }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [ticketForm, setTicketForm] = useState<SupportTicketForm>({
    name: '',
    email: '',
    subject: 'General Question',
    deviceModel: '',
    androidVersion: 'Android 14 / 15',
    message: '',
  });

  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const faqs = [
    {
      question: 'How does Google Cloud Sync work in HydroVibe?',
      answer: 'HydroVibe uses Google Firebase Cloud Firestore and Authentication. When signed in with your Google Account, any water logged on one device automatically syncs across your other Android devices in real time.',
    },
    {
      question: 'Is my body weight and health data sold or shared?',
      answer: 'No. HTE App Studio strictly adheres to privacy regulations. Your body weight, water logs, and wake hours are stored securely with AES-256 encryption and are never sold to third-party data brokers or advertisers.',
    },
    {
      question: 'How do I delete my account and data completely?',
      answer: 'You can delete your account directly inside the app under Settings > Account & Security > Delete Account, or submit a request via the Data Deletion form on this website.',
    },
    {
      question: 'Can I log water offline without an active internet connection?',
      answer: 'Yes! HydroVibe uses an offline-first encrypted SQLite database. You can log water anytime in airplane mode or without signal. As soon as connectivity returns, your logs synchronize automatically to Google Cloud.',
    },
    {
      question: 'How does the Gemini AI Hydration Coach generate recommendations?',
      answer: 'The AI Coach analyzes local ambient weather (temperature and humidity) alongside your body weight and daily activity level to suggest optimal hydration windows during the day.',
    },
    {
      question: 'Does HydroVibe support Wear OS smartwatches and Home Screen widgets?',
      answer: 'Yes. HydroVibe includes a companion Wear OS app tile for quick wrist logging and customizable Android home screen widgets for 1-tap logging.',
    },
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `HTE-TICK-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketId(id);
    setTicketSubmitted(true);
  };

  return (
    <section id="support" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Customer Care & Technical Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            How Can We{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Help You?
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Get assistance with Google Cloud sync, Wear OS setup, account options, or contact HTE App Studio support.
          </p>
        </div>

        {/* Support Grid: FAQ Accordion + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked Questions
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-900/60 border-slate-800'
                      : 'bg-white border-sky-100 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm"
                  >
                    <span className={theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs leading-relaxed border-t border-slate-800/40 text-slate-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className={`p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-sky-100 shadow-xl'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Contact HTE App Studio Support
                  </h3>
                  <p className="text-xs text-cyan-400 font-semibold">
                    Direct email: Hydrovibe_support@hightechenterprise.xyz
                  </p>
                </div>
              </div>

              {ticketSubmitted ? (
                <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto" />
                  <h4 className="font-extrabold text-base text-white">Support Ticket Created</h4>
                  <span className="text-xs font-mono text-cyan-300 bg-slate-900 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
                    Ticket ID: {ticketId}
                  </span>
                  <p className="text-xs text-slate-300">
                    Thank you! Our engineering team will respond to <span className="font-semibold text-white">{ticketForm.email}</span> within 24 business hours.
                  </p>
                  <button
                    onClick={() => setTicketSubmitted(false)}
                    className="mt-2 text-xs font-bold text-cyan-400 hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className={`block font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Smith"
                        value={ticketForm.name}
                        onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jordan@example.com"
                        value={ticketForm.email}
                        onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className={`block font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        Android Device Model
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Pixel 8 Pro / Galaxy S24"
                        value={ticketForm.deviceModel}
                        onChange={(e) => setTicketForm({ ...ticketForm, deviceModel: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        Issue Category
                      </label>
                      <select
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      >
                        <option value="General Question">General Question</option>
                        <option value="Google Cloud Sync Issue">Google Cloud Sync Issue</option>
                        <option value="Wear OS App Sync">Wear OS App Sync</option>
                        <option value="Data & Privacy Request">Data & Privacy Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      Message / Detail *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe how we can assist you..."
                      value={ticketForm.message}
                      onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Support Ticket</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
