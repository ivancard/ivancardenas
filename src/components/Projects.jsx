import projects from '../data/dataProyects';
import { ProjectItem } from './ProjectItem';

import '../scss/projects.scss';

export const Projects = () => {
    return (
        <section className='proyects-global' id='proyectos'>
            <h3>Mis proyectos</h3>
            <div className='pojects-container'>
                {projects.map(({ id, img, description }) => (
                    <ProjectItem key={id} img={img} description={description} />
                ))}
            </div>
        </section>
    );
};