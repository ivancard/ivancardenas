import { AnimatePresence } from 'framer-motion';
import { useModal } from '../hooks/useModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import '../scss/proyect-item.scss';
import { Modal } from './Modal';

export const ProjectItem = ({
  img,
  imgHigh,
  imgPhone,
  title,
  description,
  descriptionEn,
  technologies,
  repository,
  site,
  parrafs,
  parrafsEn,
  videoUrl,
  imgExtra,
}) => {
  const [modal, toggleModal] = useModal();
  const { lang } = useLanguage();
  const t = translations[lang];

  const localizedDescription = lang === 'en' && descriptionEn ? descriptionEn : description;
  const localizedParrafs = lang === 'en' && parrafsEn ? parrafsEn : parrafs;

  return (
    <>
      <AnimatePresence>
      {modal && (
        <Modal toggleModal={toggleModal} ariaLabel={title}>
          <h1 className='title-modal'>{title}</h1>
          <div className='img-modal-container'>
            {imgHigh && (
              <img
                className='img-modal'
                src={imgHigh}
                alt={title}
                loading='lazy'
              />
            )}
            {imgPhone && (
              <img
                className='img-phone'
                src={imgPhone}
                alt={`${title} demo`}
                loading='lazy'
              />
            )}
          </div>
          <p className='p-modal'>{localizedDescription}</p>
          <div className='tecnologies-modal'>
            <h2>{t.projects.technologies}</h2>
            {technologies.map((tec, index) => (
              <span key={index} className='tec'>{tec}</span>
            ))}
          </div>
          <div className='links'>
            {repository && (
              <p className='links-repo'>
                <a href={repository} target='_blank' rel='noopener noreferrer'>
                  {t.projects.repository}
                </a>
              </p>
            )}
            {site && (
              <p className='links-site'>
                {t.projects.site}{' '}
                <a href={site} target='_blank' rel='noopener noreferrer'>
                  {t.projects.here}
                </a>
              </p>
            )}
            {videoUrl && (
              <p className='video-url'>
                {t.projects.demoVideo}{' '}
                <a href={videoUrl} target='_blank' rel='noopener noreferrer'>
                  {t.projects.here}
                </a>
              </p>
            )}
          </div>
          <div className='extra-contain'>
            {localizedParrafs.map((p, i) => <p key={i}>{p}</p>)}
            {imgExtra.map((src, i) => (
              <img key={i} src={src} alt={`${title} extra ${i + 1}`} loading='lazy' />
            ))}
          </div>
        </Modal>
      )}
      </AnimatePresence>

      <div className='project-item-container'>
        <div className='view-more-button'>
          <button onClick={toggleModal} aria-label={`${t.projects.viewMore}: ${title}`}>
            {t.projects.viewMore}
          </button>
        </div>
        <div className='state-project-item' aria-hidden='true'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' className='bi bi-circle-fill' viewBox='0 0 18 18'>
            <circle cx='8' cy='8' r='5' />
          </svg>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' className='bi bi-circle-fill2' viewBox='0 0 18 18'>
            <circle cx='8' cy='8' r='5' />
          </svg>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' className='bi bi-circle-fill3' viewBox='0 0 18 18'>
            <circle cx='8' cy='8' r='5' />
          </svg>
        </div>
        <img src={img} alt={title} loading='lazy' />
      </div>
    </>
  );
};
