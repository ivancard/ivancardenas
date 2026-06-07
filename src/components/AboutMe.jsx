import { motion, AnimatePresence } from 'framer-motion';
import skills from '../data/dataSkills';
import { Skill } from './Skill';
import '../scss/aboutme.scss';
import bgAboutMe from '../assets/trama.svg';
import { Modal } from './Modal';
import { useModal } from '../hooks/useModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import imgMoreAboutMe from '../data/dataMoreAboutMe';

const bgAboutMeStyle = { backgroundImage: `url(${bgAboutMe})` };

export const AboutMe = () => {
  const [modal, toggleModal] = useModal();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <AnimatePresence>
      {modal && (
        <Modal toggleModal={toggleModal} ariaLabel={t.about.modalTitle}>
          <div className='aboutme-modal-container'>
            <h1>{t.about.modalTitle}</h1>
            <p>{t.about.modalP1}</p>
            <p>{t.about.modalP2}</p>
            <p>{t.about.modalP3}</p>
            <div className='swipper-container'>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                loop={true}
              >
                {imgMoreAboutMe.map(({ id, img }) => (
                  <SwiperSlide key={id}>
                    <img src={img} alt={`Foto personal ${id}`} loading='lazy' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <p>{t.about.modalP4}</p>
            <p>{t.about.modalP5}</p>
          </div>
        </Modal>
      )}
      </AnimatePresence>

      <motion.section
        className='aboutme-container'
        id='sobreMi'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className='bg-aboutme' style={bgAboutMeStyle} aria-hidden='true' />
        <div className='skills-description'>
          <div className='aboutme-description-container'>
            <div className='aboutme-description-text'>
              <h3 className='aboutme-description-title'>{t.about.title}</h3>
              <p className='first-paragraph'>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            <button className='more-aboutme' onClick={toggleModal}>
              {t.about.moreBtn}
            </button>
          </div>

          <div className='aboutme-skills-container'>
            <h3>{t.about.skills}</h3>
            <div className='aboutme-skills-list'>
              {skills.map(({ id, title, img }) => (
                <Skill key={id} title={title} img={img} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
