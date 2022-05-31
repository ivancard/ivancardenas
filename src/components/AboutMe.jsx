import skills from '../data/dataSkills';
import { Skill } from './Skill';

import '../scss/aboutme.scss';
import bgAboutMe from '../assets/trama.svg';

const bgAboutMeStyle = {
    backgroundImage: `url(${bgAboutMe})`,
};

export const AboutMe = () => {
    return (
        <section className='aboutme-container'>
            <div className='bg-aboutme' style={bgAboutMeStyle}></div>
            <div className='skills-description'>
                <div className='aboutme-description-container'>
                    <div className='aboutme-description-text'>
                        <h3 className='aboutme-description-title'>Sobre Mi</h3>
                        <p>
                            Soy desarrollador de software enfocado al área web,
                            tanto back-end como front-end, siendo esta última mi
                            área de mayor especialidad.
                        </p>
                        <p>
                            Estudio Ingenieria en informática y realicé muchos
                            cursos en diferentes plataformas. Entre ellas
                            Platzi, Udemy, Crehana, entre otras.
                        </p>
                    </div>
                    <button className='more-aboutme'>Más sobre mi</button>
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
    );
};
