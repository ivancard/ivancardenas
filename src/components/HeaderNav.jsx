import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../scss/header-nav.scss';
import { Window } from './Window';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='2'
    stroke='currentColor'
    strokeLinecap='round'
    {...props}
  />
);

const SECTION_IDS = ['header', 'sobreMi', 'proyectos', 'contacto'];

export const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('header');
  const [darkMode, setDarkMode] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  // Sync dark mode with document
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  // Track active section via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scanPoint = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scanPoint) {
          setActiveSection(SECTION_IDS[i]);
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#header', label: t.nav.home, id: 'header' },
    { href: '#sobreMi', label: t.nav.about, id: 'sobreMi' },
    { href: '#proyectos', label: t.nav.projects, id: 'proyectos' },
    { href: '#contacto', label: t.nav.contact, id: 'contacto' },
  ];

  const handleMobileLinkClick = () => setIsOpen(false);

  return (
    <header className='header-container' id='header'>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className='logo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='105'
            height='105'
            viewBox='0 0 105 105'
            aria-label='Ivan Cardenas logo'
          >
            <g
              id='Grupo_1'
              data-name='Grupo 1'
              transform='translate(-240 -35)'
              style={{ isolation: 'isolate' }}
            >
              <g transform='translate(240 35)' fill='#efece6' stroke='#707070' strokeWidth='3'>
                <rect width='105' height='105' stroke='none' />
                <rect x='1.5' y='1.5' width='102' height='102' fill='none' />
              </g>
              <g transform='translate(240 35)' fill='#efece6' stroke='#707070' strokeWidth='2'>
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <g transform='translate(292 87)' fill='#efece6' stroke='#707070' strokeWidth='2'>
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <g transform='translate(292 35)' fill='#efece6' stroke='#707070' strokeWidth='2'>
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <g transform='translate(240 87)' fill='#efece6' stroke='#707070' strokeWidth='2'>
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <text
                transform='translate(259.5 71.5)'
                fill='#707070'
                stroke='#707070'
                strokeWidth='1'
                fontSize='30'
                fontFamily='UbuntuMono-Bold, Ubuntu Mono'
                fontWeight='700'
              >
                <tspan x='0' y='0'>I</tspan>
              </text>
              <text
                transform='translate(311.5 123.5)'
                fill='#707070'
                stroke='#707070'
                strokeWidth='1'
                fontSize='30'
                fontFamily='UbuntuMono-Bold, Ubuntu Mono'
                fontWeight='700'
              >
                <tspan x='0' y='0'>C</tspan>
              </text>
            </g>
          </svg>
        </div>

        {/* Desktop nav links */}
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <div>
                <div className={`button${activeSection === link.id ? ' active' : ''}`}>
                  <a href={link.href}>{link.label}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Right-side controls */}
        <div className='nav-actions'>
          <button
            className='lang-toggle'
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            className={`dark-toggle${darkMode ? ' is-dark' : ''}`}
            onClick={() => setDarkMode((d) => !d)}
            aria-label={darkMode ? t.accessibility.toggleLight : t.accessibility.toggleDark}
          >
            <svg className='toggle-moon' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
            </svg>
            <span className='toggle-knob' />
            <svg className='toggle-sun' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' aria-hidden='true'>
              <circle cx='12' cy='12' r='4' />
              <path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
            </svg>
          </button>
          <button
            className='hamburger-btn'
            onClick={() => setIsOpen((o) => !o)}
            aria-label={t.accessibility.toggleMenu}
            aria-expanded={isOpen}
          >
            <motion.svg
              animate={isOpen ? 'open' : 'closed'}
              xmlns='http://www.w3.org/2000/svg'
              className='menu-icon'
              fill='none'
              viewBox='0 0 24 24'
              width='28'
              height='28'
            >
              <Path variants={{ closed: { d: 'M 2 2.5 L 20 2.5' }, open: { d: 'M 3 16.5 L 17 2.5' } }} />
              <Path
                d='M 2 9.423 L 20 9.423'
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                transition={{ duration: 0.1 }}
              />
              <Path variants={{ closed: { d: 'M 2 16.346 L 20 16.346' }, open: { d: 'M 3 2.5 L 17 16.346' } }} />
            </motion.svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className='nav-mobile-container'
        >
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={activeSection === link.id ? 'active-mobile' : ''}
                    onClick={handleMobileLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}

      {/* Hero window */}
      <motion.div
        className='header-window-container'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <Window>
          <div className='window-text'>
            <h3>{t.hero.greeting}</h3>
            <h1>Ivan Cardenas</h1>
            <h5>{t.hero.role}</h5>
          </div>
        </Window>
      </motion.div>
    </header>
  );
};
