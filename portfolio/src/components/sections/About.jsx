import React from 'react';
import { motion } from 'framer-motion';
import { Layers, BarChart3, ShieldCheck, Cpu } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function About() {
  const { t } = useApp();
  const icons = [
    <Layers className="w-6 h-6 text-indigo-500" />,
    <BarChart3 className="w-6 h-6 text-cyan-500" />,
    <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    <Cpu className="w-6 h-6 text-violet-500" />
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {t.ui.aboutBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.ui.aboutTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed pt-2 font-normal">
            {t.personal.bio}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.bento.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`bento-card p-7 flex flex-col justify-between relative overflow-hidden group ${item.colSpan}`}
            >
              <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center mb-6">
                {icons[idx % icons.length]}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}