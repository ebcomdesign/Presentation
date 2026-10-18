import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Experience() {
  const { t } = useApp();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {t.ui.expBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.ui.expTitle}
          </h2>
        </div>

        <div className="grid gap-5">
          {t.experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bento-card p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-indigo-500" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1 max-w-2xl font-normal">
                  {exp.description}
                </p>
              </div>
              <div className="sm:text-end flex-shrink-0">
                <span className="inline-block text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}