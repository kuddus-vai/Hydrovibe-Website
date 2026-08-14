import React, { useState } from 'react';
import { Trash2, ShieldAlert, CheckCircle2, Clock, Mail, ArrowRight, HelpCircle, FileText, Send, AlertTriangle, Smartphone, RefreshCw } from 'lucide-react';
import { ThemeMode, DeletionRequestForm, DeletionRequestResponse } from '../types';

interface DataDeletionProps {
  theme: ThemeMode;
}

export const DataDeletion: React.FC<DataDeletionProps> = ({ theme }) => {
  const [formData, setFormData] = useState<DeletionRequestForm>({
    fullName: '',
    email: '',
    googleAccountId: '',
    reason: 'I am no longer using the app',
    confirmUnderstand: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestResult, setRequestResult] = useState<DeletionRequestResponse | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmUnderstand) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      setRequestResult({
        requestId: `HV-DEL-2026-${randomCode}`,
        status: 'SCHEDULED',
        estimatedCompletion: 'Within 24 Hours',
        message: `Deletion request received for ${formData.email}. All associated Google Cloud Firestore documents, authentication tokens, and backup records will be permanently removed.`,
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleResetForm = () => {
    setRequestResult(null);
    setFormData({
      fullName: '',
      email: '',
      googleAccountId: '',
      reason: 'I am no longer using the app',
      confirmUnderstand: false,
    });
  };

  return (
    <section id="data-deletion" className="py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-slate-950/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-4">
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span>Google Play Safety & Data Rights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Account & Data{' '}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Deletion Policy
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            You retain full ownership of your personal health metrics. HydroVibe offers two simple methods to completely erase your account and data.
          </p>
        </div>

        {/* Method 1: In-App Deletion Instructions */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 font-bold">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Method 1: Direct In-App Account Deletion (Instant)
              </h3>
              <p className="text-xs text-slate-400">
                Recommended if you still have the HydroVibe Android application installed.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Open Settings',
                desc: 'Launch HydroVibe on your Android device and tap the Gear icon in the navigation bar.',
              },
              {
                step: '02',
                title: 'Account & Security',
                desc: 'Scroll to the "Account & Privacy" section and select "Security Controls".',
              },
              {
                step: '03',
                title: 'Tap "Delete Account"',
                desc: 'Select the "Delete Account & Purge Cloud Data" option located at the bottom.',
              },
              {
                step: '04',
                title: 'Confirm Purge',
                desc: 'Confirm re-authentication via Google Sign-In. All Firestore documents & local caches vanish immediately.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border relative overflow-hidden ${
                  theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-sky-100 shadow-sm'
                }`}
              >
                <span className="text-3xl font-extrabold text-cyan-500/30 absolute top-4 right-4">
                  {step.step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs mb-3">
                  Step {idx + 1}
                </div>
                <h4 className={`text-base font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h4>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Method 2: Interactive Web Deletion Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Box */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border ${
              theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-sky-100 shadow-lg'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Method 2: Web Data Deletion Request
                  </h3>
                  <p className="text-xs text-slate-400">
                    Use this form if you uninstalled the app or lost access to your device.
                  </p>
                </div>
              </div>

              {requestResult ? (
                /* Success Result Box */
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-base text-white">Deletion Request Submitted</h4>
                      <span className="text-xs font-mono text-emerald-300">Reference: {requestResult.requestId}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="font-bold text-amber-400">{requestResult.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Estimated Completion:</span>
                      <span className="font-bold text-cyan-300">{requestResult.estimatedCompletion}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {requestResult.message}
                  </p>

                  <button
                    onClick={handleResetForm}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-xs font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      Registered Google Account Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex.morgan@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      Reason for Deletion (Optional)
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      <option value="I am no longer using the app">I am no longer using the app</option>
                      <option value="Privacy concerns">Privacy concerns</option>
                      <option value="Switching to a different app">Switching to a different app</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.confirmUnderstand}
                        onChange={(e) => setFormData({ ...formData, confirmUnderstand: e.target.checked })}
                        className="mt-0.5 rounded border-rose-500 text-rose-500 focus:ring-rose-500 accent-rose-500"
                      />
                      <span className="text-slate-300">
                        I understand that deleting my account permanently removes all hydration logs, streaks, and weight metrics from Google Cloud Firestore and cannot be undone.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.confirmUnderstand}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-extrabold text-xs tracking-wide shadow-lg shadow-rose-950/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Clock className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>{isSubmitting ? 'Processing Request...' : 'Submit Data Deletion Request'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Data Retention Breakdown Box */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-sky-100 shadow-md'
            }`}>
              <h4 className={`text-base font-bold mb-4 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                Data Impact Breakdown
              </h4>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <span className="font-extrabold text-rose-400 uppercase tracking-wider block mb-1">
                    Permanently Deleted
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      Google Cloud Firestore User Document
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      All Historical Water Consumption Logs
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      Body Weight & Wake/Sleep Schedule Data
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      Local SQLite Database Cache on Device
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <span className="font-extrabold text-slate-300 uppercase tracking-wider block mb-1">
                    Google OAuth Unlinking
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Firebase Authentication immediately revokes HydroVibe's access token to your Google Account identity.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <span className="font-extrabold text-cyan-300 uppercase tracking-wider block mb-1">
                    Support SLA
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Web request deletion tickets are fulfilled within 24 to 48 business hours. You can track status using your reference code by emailing Hydrovibe_support@hightechenterprise.xyz.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
