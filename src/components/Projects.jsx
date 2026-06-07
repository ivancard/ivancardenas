import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import iosProjects from '../data/dataProjectsIOS';
import webProjects from '../data/dataProjectsWeb';
import { ProjectItem } from './ProjectItem';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import '../scss/projects.scss';

const allProjects = [...iosProjects, ...webProjects];

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { lang } = useLanguage();
  const t = translations[lang];

  const FILTERS = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'ios', label: t.projects.filterIOS },
    { key: 'web', label: t.projects.filterWeb },
  ];

  const filtered =
    filter === 'all' ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <motion.section
      className='proyects-global'
      id='proyectos'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h3>{t.projects.title}</h3>

      <div className='projects-filter' role='group' aria-label='Filtrar proyectos'>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${filter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className='projects-container'>
        <AnimatePresence mode='wait'>
          {filtered.map((project, index) => (
            <motion.div
              key={`${project.category}-${project.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              <ProjectItem {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
