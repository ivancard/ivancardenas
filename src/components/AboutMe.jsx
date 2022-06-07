import skills from '../data/dataSkills';
import { Skill } from './Skill';

import '../scss/aboutme.scss';
import bgAboutMe from '../assets/trama.svg';
import { Modal } from './Modal';
import { useModal } from '../hooks/useModal';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// pictures for more about me
import imgMoreAboutMe from '../data/dataMoreAboutMe';

const bgAboutMeStyle = {
    backgroundImage: `url(${bgAboutMe})`,
};

export const AboutMe = () => {
    const [modal, toggleModal] = useModal();

    return (
        <>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className='aboutme-modal-container'>
                        <h1>Más sobre mi</h1>
                        <p>
                            Mi nombre es Ivan Cardenas, nací en Capital Federal,
                            Buenos Aires, Argentina. Crecí en el partido de
                            Lomas de Zamora GBA, donde recido actualmente.
                        </p>
                        <p>
                            En la secundaria me nació mi interez por la
                            tecnología, comencé diseñando infografias y videos
                            escolares. Por otra parte me interecé en el diseño
                            3d y tambien conocí HTML, con la cual hice mi
                            primera web a los 13 años.
                        </p>
                        <p>
                            En los años siguientes me dedique a profundizar en
                            el mundo informatico y comence a arreglar pcs, eso
                            me acerco a la programacion al copiar y ejecutar
                            scripts por terminal.
                        </p>
                        <p>
                            Al mismo tiempo lleve a cabo proyectos de produccion
                            multimedial. Diseñando branding para marcas, videos,
                            cubriendo eventos con fotografia, efectos visuales,
                            diseño 3d, produciendo y dirigiendo cortometrajes,
                            videos publicitarios y musicales. Manejo muchos
                            software en esa area, como la suite de Adobe,
                            daVinci Resolve, Autodesk Maya, Cinema 4D, Nuke,
                            etc.
                        </p>
                        <div className='swipper-container'>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{ delay: 2000 }}
                                loop={true}>
                                {imgMoreAboutMe.map(({ id, img }) => (
                                    <SwiperSlide key={id}>
                                        <img src={img} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <p>
                            Tambien soy musico, toco guitarra, bajo, teclado,
                            bateria, violin y violoncello. Aprendi por mi cuenta
                            y enseñe durante un tiempo. Incursione en el mundo
                            de la produccion musical grabando, mezclando y
                            masterizando canciones para cantantes en mi home
                            studio. Estudié lutheria, fabrique y repare varios
                            instrumentos electricos de cuerda.
                        </p>
                    </div>
                </Modal>
            )}
            <section className='aboutme-container' id='sobreMi'>
                <div className='bg-aboutme' style={bgAboutMeStyle}></div>
                <div className='skills-description'>
                    <div className='aboutme-description-container'>
                        <div className='aboutme-description-text'>
                            <h3 className='aboutme-description-title'>
                                Sobre Mi
                            </h3>
                            <p>
                                Soy desarrollador de software enfocado al
                                desarrollo web, tanto back-end como front-end,
                                siendo esta última mi área de mayor
                                especialidad.
                            </p>
                            <p>
                                Estudio Ingenieria en informática y realicé
                                muchos cursos en diferentes plataformas. Entre
                                ellas Platzi, Udemy, Crehana, entre otras.
                            </p>
                        </div>
                        <button className='more-aboutme' onClick={toggleModal}>
                            Más sobre mi
                        </button>
                    </div>
                    <div className='aboutme-skills-container'>
                        <h3>Skills</h3>
                        <div className='aboutme-skills-list'>
                            {skills.map(({ id, title, img }) => (
                                <Skill key={id} title={title} img={img} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
