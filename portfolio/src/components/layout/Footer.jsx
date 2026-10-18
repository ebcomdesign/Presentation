import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-10 text-slate-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p>© {new Date().getFullYear()} {t.personal.name} — {t.ui.footerRights}</p>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <a href={t.personal.github} target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">
            GitHub
          </a>
          <a href={t.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${t.personal.email}`} className="hover:text-indigo-500 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}