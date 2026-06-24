import { motion } from 'framer-motion';
import '../scss/footer.scss';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const MiFooter = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span>{t.footer.credit} — 2026</span>
    </motion.footer>
  );
};
