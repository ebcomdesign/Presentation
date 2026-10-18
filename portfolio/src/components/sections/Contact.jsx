import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="bento-card p-8 sm:p-14 text-center space-y-8 relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-500/20 blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              {t.ui.contactBadge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {t.ui.contactTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
              {t.ui.contactSub}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10 font-bold text-sm">
            <a
              href={`mailto:${t.personal.email}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>{t.personal.email}</span>
            </a>
            <a
              href={`tel:${t.personal.phone}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-200/80 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-indigo-500" />
              <span dir="ltr">{t.personal.phone}</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-slate-500">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span>{t.personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}