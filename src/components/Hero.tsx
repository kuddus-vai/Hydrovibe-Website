import React, { useState } from 'react';
import { Droplets, Flame, Sparkles, CheckCircle2, ShieldCheck, Cloud, Cpu, Star, Plus, RefreshCw, Zap, ArrowRight, Smartphone } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  // Interactive Phone Simulator State
  const [currentWater, setCurrentWater] = useState(1850);
  const targetWater = 2500;
  const [streakDays, setStreakDays] = useState(12);
  const [lastLoggedTime, setLastLoggedTime] = useState('2:15 PM');
  const [showLogToast, setShowLogToast] = useState(false);
  const [loggedAmount, setLoggedAmount] = useState(0);

  const handleAddWater = (amount: number) => {
    setCurrentWater((prev) => Math.min(prev + amount, 3500));
    setLoggedAmount(amount);
    setLastLoggedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setShowLogToast(true);
    setTimeout(() => setShowLogToast(false), 2500);
  };

  const resetSimulator = () => {
    setCurrentWater(1200);
  };

  const percentage = Math.min(Math.round((currentWater / targetWater) * 100), 100);

  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-16 lg:pb-28 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Badges */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Smart Hydration Powered by Gemini AI & Firebase</span>
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* App Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
              HydroVibe{' '}
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Smart Hydration & Water Tracker
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Stay hydrated with intelligent goal tracking, Google Cloud sync, and AI-powered health insights tailored to your body weight, weather, and daily activity.
            </p>

            {/* CTA Buttons: Google Play Badge & Quick Tour */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10" id="download">
              {/* Download on Google Play Button */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-semibold border border-cyan-500/30 hover:border-cyan-400/80 shadow-xl shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
              >
                {/* Google Play Icon Graphic */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.60889 1.77661C3.39087 2.01257 3.25 2.37891 3.25 2.86816V21.1318C3.25 2.6211 3.39087 2.98743 3.60889 3.22339L3.68115 3.29102L13.7842 12.1582V12.3418L3.68115 21.209L3.60889 21.2766Z" fill="#00D2FF"/>
                    <path d="M17.1488 15.1118L13.7842 12.1582V12.3418L17.1493 9.38818L17.2285 9.43262L21.2183 11.6997C22.3584 12.3477 22.3584 13.4023 21.2183 14.0503L17.2285 16.3174L17.1488 15.1118Z" fill="#FFC800"/>
                    <path d="M17.2285 14.0503L13.7842 12.25L3.60889 21.2766C3.98584 21.6753 4.60693 21.7275 5.31299 21.3276L17.2285 14.0503Z" fill="#FF3A44"/>
                    <path d="M17.2285 9.43262L5.31299 3.15527C4.60693 2.75537 3.98584 2.80762 3.60889 3.2063L13.7842 12.25L17.2285 9.43262Z" fill="#00E676"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300">GET IT ON</span>
                  <span className="text-base font-extrabold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Secondary CTA */}
              <a
                href="#features"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-sky-50 hover:border-sky-300'
                }`}
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Play Store Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Firebase Cloud Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Gemini AI Coach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="text-xs font-semibold text-slate-200">4.9 / 5.0 Rating</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Phone Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 rounded-[42px] blur-md opacity-60 animate-pulse" />

              {/* Phone Frame */}
              <div className="relative rounded-[38px] bg-slate-950 p-4 border-4 border-slate-800 shadow-2xl shadow-cyan-950/80">
                
                {/* Phone Top Speaker & Camera Notch */}
                <div className="flex justify-center items-center gap-2 mb-4">
                  <div className="w-16 h-3 bg-slate-800 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-900" />
                  </div>
                </div>

                {/* HydroVibe App UI Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white leading-none">HydroVibe Pro</h3>
                      <span className="text-[10px] text-cyan-400/80 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Firebase Synced
                      </span>
                    </div>
                  </div>
                  
                  {/* Streak pill */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{streakDays} Days</span>
                  </div>
                </div>

                {/* Ring Progress Display */}
                <div className="relative flex flex-col items-center justify-center py-6 my-2 bg-gradient-to-b from-slate-900/80 to-slate-950/80 rounded-2xl border border-slate-800">
                  
                  {/* Circular Water Progress Gauge */}
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-slate-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Foreground Water Wave Ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-cyan-400 transition-all duration-700 ease-out"
                        strokeWidth="8"
                        strokeDasharray={264}
                        strokeDashoffset={264 - (264 * percentage) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    {/* Center Text inside gauge */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <Droplets className="w-6 h-6 text-cyan-400 mb-1 animate-bounce" style={{ animationDuration: '3s' }} />
                      <span className="text-2xl font-black text-white tracking-tight">
                        {currentWater} <span className="text-xs font-normal text-slate-400">/ {targetWater} ml</span>
                      </span>
                      <span className="text-xs font-bold text-cyan-400 mt-0.5">
                        {percentage}% Goal Met
                      </span>
                    </div>
                  </div>

                  {/* Toast Notification when adding water */}
                  {showLogToast && (
                    <div className="absolute top-2 px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-lg animate-in fade-in zoom-in duration-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>+{loggedAmount} ml Logged!</span>
                    </div>
                  )}

                  <p className="text-[11px] text-slate-400 mt-2">
                    Last drink: <span className="text-slate-200 font-semibold">{lastLoggedTime}</span>
                  </p>
                </div>

                {/* AI Tip Banner */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/25 mb-4">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-cyan-300">
                        <span>Gemini AI Hydration Tip</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                        28°C outside today! Drink +300ml before 4 PM to maintain optimal stamina.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Log Water Quick Tap Buttons */}
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-1 flex justify-between items-center">
                    <span>Try Quick Log</span>
                    <button onClick={resetSimulator} className="text-cyan-400 hover:underline flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5" /> Reset
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleAddWater(250)}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800 transition-all active:scale-95 text-center group"
                    >
                      <Plus className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-extrabold text-white mt-0.5">+250 ml</span>
                      <span className="text-[9px] text-slate-400">Glass</span>
                    </button>

                    <button
                      onClick={() => handleAddWater(500)}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-sky-500/30 hover:border-sky-400 hover:bg-slate-800 transition-all active:scale-95 text-center group"
                    >
                      <Plus className="w-3.5 h-3.5 text-sky-400 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-extrabold text-white mt-0.5">+500 ml</span>
                      <span className="text-[9px] text-slate-400">Bottle</span>
                    </button>

                    <button
                      onClick={() => handleAddWater(350)}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-blue-500/30 hover:border-blue-400 hover:bg-slate-800 transition-all active:scale-95 text-center group"
                    >
                      <Plus className="w-3.5 h-3.5 text-blue-400 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-extrabold text-white mt-0.5">+350 ml</span>
                      <span className="text-[9px] text-slate-400">Mug</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-4" />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
