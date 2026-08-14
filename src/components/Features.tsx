import React, { useState } from 'react';
import { Sparkles, Cloud, Cpu, Watch, BarChart3, ShieldCheck, Calculator, Clock, Check, Droplet, Sun, Dumbbell } from 'lucide-react';
import { ThemeMode, HydrationCalcInput, HydrationCalcResult } from '../types';

interface FeaturesProps {
  theme: ThemeMode;
}

export const Features: React.FC<FeaturesProps> = ({ theme }) => {
  // Calculator State
  const [calcInput, setCalcInput] = useState<HydrationCalcInput>({
    weightKg: 70,
    activityMinutes: 45,
    climate: 'temperate',
    unit: 'ml',
  });

  // Calculate target based on formula
  const calculateTarget = (): HydrationCalcResult => {
    // Base formula: 35ml per kg of weight
    let baseMl = calcInput.weightKg * 35;
    
    // Activity addition: +350ml per 30 minutes of activity
    const activityAddition = (calcInput.activityMinutes / 30) * 350;
    
    // Climate adjustment
    let climateMultiplier = 1.0;
    if (calcInput.climate === 'hot') climateMultiplier = 1.15;
    if (calcInput.climate === 'humid') climateMultiplier = 1.25;

    const totalMl = Math.round((baseMl + activityAddition) * climateMultiplier);
    const totalOz = Math.round(totalMl * 0.033814);

    const glassVolumeMl = 250;
    const glasses = Math.ceil(totalMl / glassVolumeMl);

    const isMl = calcInput.unit === 'ml';
    const amountPerGlass = isMl ? glassVolumeMl : 8;

    const schedule = [
      { time: '08:00 AM', amountMl: 300, amountOz: 10, label: 'Morning Wake-up Glass' },
      { time: '11:00 AM', amountMl: 400, amountOz: 14, label: 'Mid-Morning Refresh' },
      { time: '01:30 PM', amountMl: 500, amountOz: 17, label: 'Post-Lunch Hydration' },
      { time: '04:30 PM', amountMl: 400, amountOz: 14, label: 'Pre-Workout / Afternoon Boost' },
      { time: '07:30 PM', amountMl: 500, amountOz: 17, label: 'Dinner & Evening Hydration' },
      { time: '09:30 PM', amountMl: 250, amountOz: 8, label: 'Nightly Nightcap' },
    ];

    return {
      dailyTargetMl: totalMl,
      dailyTargetOz: totalOz,
      recommendedGlasses: glasses,
      schedule,
    };
  };

  const calcResult = calculateTarget();

  const featureCards = [
    {
      icon: Cpu,
      title: 'Gemini AI Hydration Coach',
      description: 'Learns your unique habits, sleep cycles, and daily weather to deliver timely, non-intrusive intake tips.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Cloud,
      title: 'Google Cloud & Firebase Sync',
      description: 'Your water logs are securely backed up in real time to Cloud Firestore and accessible across all Android devices.',
      gradient: 'from-sky-500 to-cyan-600',
    },
    {
      icon: Calculator,
      title: 'Dynamic Goal Calculator',
      description: 'Scientific hydration intake formulas that adapt on the fly to body weight, exercise duration, and humidity.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Watch,
      title: 'Wear OS & Widget Ready',
      description: 'Log water with a single tap directly from your smartwatch face or customizable Android home screen widgets.',
      gradient: 'from-cyan-400 to-teal-500',
    },
    {
      icon: BarChart3,
      title: 'Detailed Trends & Analytics',
      description: 'Monitor daily streaks, weekly averages, and exported hydration reports to stay accountable.',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Privacy & Local Caching',
      description: 'Offline-first SQLite database. Zero advertising tracking or data selling. Instant 1-click cloud data wipe.',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Intelligent Android Water Tracker</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Designed for Effortless{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Daily Hydration
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            HydroVibe combines cutting-edge Google Cloud technologies with intelligent AI algorithms to keep your body at peak performance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {featureCards.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/40'
                    : 'bg-white border-sky-100 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.gradient} p-3 text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {feat.title}
                </h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Hydration Calculator Widget Box */}
        <div className={`p-8 sm:p-10 lg:p-12 rounded-3xl border relative overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800 shadow-2xl'
            : 'bg-gradient-to-b from-white to-sky-50/50 border-sky-200 shadow-xl'
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-2xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Smart Hydration Calculator
                  </h3>
                  <p className="text-xs text-cyan-400 font-semibold">
                    Test the HydroVibe algorithm live
                  </p>
                </div>
              </div>

              {/* Weight Input */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Body Weight ({calcInput.weightKg} kg / {Math.round(calcInput.weightKg * 2.20462)} lbs)
                </label>
                <input
                  type="range"
                  min="40"
                  max="140"
                  step="1"
                  value={calcInput.weightKg}
                  onChange={(e) => setCalcInput({ ...calcInput, weightKg: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>40 kg (88 lbs)</span>
                  <span>90 kg (198 lbs)</span>
                  <span>140 kg (308 lbs)</span>
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <Dumbbell className="w-3.5 h-3.5 text-cyan-400" />
                  Daily Exercise ({calcInput.activityMinutes} minutes)
                </label>
                <input
                  type="range"
                  min="0"
                  max="150"
                  step="15"
                  value={calcInput.activityMinutes}
                  onChange={(e) => setCalcInput({ ...calcInput, activityMinutes: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>Light (0 min)</span>
                  <span>Moderate (45 min)</span>
                  <span>Intense (120+ min)</span>
                </div>
              </div>

              {/* Climate Selection */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  Climate / Environment
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'temperate', label: 'Temperate (20°C)' },
                    { key: 'hot', label: 'Hot (28°C+)' },
                    { key: 'humid', label: 'Tropical/Humid' },
                  ].map((clim) => (
                    <button
                      key={clim.key}
                      onClick={() => setCalcInput({ ...calcInput, climate: clim.key as any })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        calcInput.climate === clim.key
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-extrabold shadow-md'
                          : theme === 'dark'
                          ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-sky-50'
                      }`}
                    >
                      {clim.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Unit Switcher */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  Preferred Units
                </span>
                <div className="flex gap-1 p-1 bg-slate-800 rounded-xl">
                  <button
                    onClick={() => setCalcInput({ ...calcInput, unit: 'ml' })}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      calcInput.unit === 'ml' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Milliliters (ml)
                  </button>
                  <button
                    onClick={() => setCalcInput({ ...calcInput, unit: 'oz' })}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      calcInput.unit === 'oz' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Fluid Oz (oz)
                  </button>
                </div>
              </div>

            </div>

            {/* Right Output Results Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">
                    Recommended Daily Target
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                    HydroVibe AI Formula
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {calcInput.unit === 'ml' ? `${calcResult.dailyTargetMl.toLocaleString()} ml` : `${calcResult.dailyTargetOz} fl oz`}
                  </span>
                  <span className="text-sm text-slate-400 font-semibold">
                    ≈ {calcResult.recommendedGlasses} glasses (250ml)
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6">
                  Based on body mass ({calcInput.weightKg}kg), +{calcInput.activityMinutes}m exercise supplement, and {calcInput.climate} climate factor.
                </p>

                {/* Suggested Schedule */}
                <h4 className="text-xs uppercase font-bold text-slate-300 mb-3 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Suggested HydroVibe Schedule
                </h4>

                <div className="space-y-2 mb-6 max-h-48 overflow-y-auto pr-1">
                  {calcResult.schedule.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                      <div className="flex items-center gap-2">
                        <Droplet className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="font-bold text-white">{item.time}</span>
                        <span className="text-slate-400 text-[11px] hidden sm:inline">• {item.label}</span>
                      </div>
                      <span className="font-extrabold text-cyan-300">
                        {calcInput.unit === 'ml' ? `${item.amountMl} ml` : `${item.amountOz} oz`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-center text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Sync This Target To HydroVibe App
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
