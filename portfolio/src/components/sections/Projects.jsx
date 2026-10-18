import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="py-24 px-6 bg-slate-100/60 dark:bg-slate-900/20 border-y border-slate-200/60 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {t.ui.projectsBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.ui.projectsTitle}
          </h2>
        </div>

        <div className="space-y-8">
          {t.projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bento-card p-6 sm:p-10 relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {proj.category}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{proj.role}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-xs">{proj.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-bold">
                    <Sparkles className="w-4 h-4 flex-shrink-0" />
                    <span>{proj.impact}</span>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                      <span>{t.ui.viewCaseStudy}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="aspect-[16/10] rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-300/80 dark:border-slate-700/70 p-5 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-inner">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <Layers className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="space-y-2.5 my-auto">
                      <div className="h-3 w-1/3 rounded-full bg-indigo-500/30" />
                      <div className="h-6 w-3/4 rounded-lg bg-slate-300 dark:bg-slate-700/80" />
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-14 rounded-xl bg-slate-300/70 dark:bg-slate-800" />
                        <div className="h-14 rounded-xl bg-indigo-500/20 border border-indigo-500/30" />
                        <div className="h-14 rounded-xl bg-slate-300/70 dark:bg-slate-800" />
                      </div>
                    </div>
                    <div className="text-[11px] font-mono font-semibold text-slate-400 flex justify-between">
                      <span>Case Study Preview</span>
                      <span>UI/UX System</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}