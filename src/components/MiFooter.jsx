import '../scss/footer.scss';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const MiFooter = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer>
      <span>{t.footer.credit} — 2025</span>
    </footer>
  );
};
