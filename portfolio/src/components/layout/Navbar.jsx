import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'fa', label: 'فا' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'عر' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header py-3 shadow-lg shadow-black/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-black text-base shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            AK
          </div>
          <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            {t.personal.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300/60 dark:border-slate-800 p-1.5 rounded-full backdrop-blur-md">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 rounded-full text-xs sm:text-sm font-medium transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls: Language Switcher + Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* 3-Language Switcher Pill */}
          <div className="flex items-center bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 p-1 rounded-full">
            <Globe className="w-3.5 h-3.5 text-slate-500 mx-1.5 hidden sm:block" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === l.code
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Dark / Light Mode Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-all"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-header border-b border-slate-200 dark:border-slate-800 px-6 py-4 mt-3 space-y-2"
          >
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-500"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}