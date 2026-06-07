import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import '../scss/scroll-to-top.scss';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className='scroll-to-top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.accessibility.scrollTop}
    >
      ↑
    </button>
  );
};
