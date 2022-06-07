import projects from '../data/dataProyects';
import { ProjectItem } from './ProjectItem';

import '../scss/projects.scss';

export const Projects = () => {
    return (
        <section className='proyects-global' id='proyectos'>
            <h3>Mis proyectos</h3>
            <div className='pojects-container'>
                {projects.map(
                    ({
                        id,
                        img,
                        imgHigh,
                        title,
                        description,
                        technologies,
                        repository,
                        site,
                        parrafs,
                        videoUrl,
                        imgExtra,
                    }) => (
                        <ProjectItem
                            key={id}
                            img={img}
                            imgHigh={imgHigh}
                            title={title}
                            description={description}
                            technologies={technologies}
                            repository={repository}
                            site={site}
                            parrafs={parrafs}
                            videoUrl={videoUrl}
                            imgExtra={imgExtra}
                        />
                    )
                )}
            </div>
        </section>
    );
};
