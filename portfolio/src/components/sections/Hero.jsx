import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bento-card text-xs font-bold tracking-wide text-indigo-600 dark:text-indigo-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.personal.badge}</span>
        </motion.div>

        {/* Main Hero Typography: Font-black & Tight Leading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.25] sm:leading-[1.15]"
        >
          {t.personal.heroTitle1} <br />
          <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
            {t.personal.heroTitleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle: Relaxed leading for high readability */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {t.personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 pt-2 font-semibold text-sm"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
          >
            <span>{t.ui.ctaPrimary}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-2xl bento-card text-slate-800 dark:text-slate-200 hover:-translate-y-0.5"
          >
            {t.ui.ctaSecondary}
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-4 pt-10 max-w-2xl mx-auto"
        >
          {t.personal.stats.map((stat, i) => (
            <div key={i} className="bento-card p-4 sm:p-5 text-center">
              <div className="text-2xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}