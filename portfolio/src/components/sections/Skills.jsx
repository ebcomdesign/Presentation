import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="py-24 px-6 bg-slate-100/60 dark:bg-slate-900/20 border-t border-slate-200/60 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {t.ui.skillsBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.ui.skillsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.skillCategories.map((cat, idx) => (
            <div key={idx} className="bento-card p-7 space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 tracking-tight">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}