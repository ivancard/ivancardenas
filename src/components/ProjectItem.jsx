import { useModal } from '../hooks/useModal';

import '../scss/proyect-item.scss';
import { Modal } from './Modal';

export const ProjectItem = ({
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
}) => {
    const [modal, toggleModal] = useModal();

    return (
        <>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <h1 className='title-modal'>{title}</h1>
                    <div className='img-modal-container'>
                        <img className='img-modal' src={imgHigh} alt={title} />
                    </div>
                    <p className='p-modal'>{description}</p>
                    <div className='tecnologies-modal'>
                        <h2>Tecnologias usadas:</h2>
                        {technologies.map((tec, index) => (
                            <span key={index} className='tec'>
                                {tec}{' '}
                            </span>
                        ))}
                    </div>
                    <div className='links'>
                        <p className='links-repo'>
                            <a href={repository} target='_blank'>
                                Repositorio
                            </a>
                        </p>
                        {site && (
                            <p className='links-site'>
                                Sitio
                                <a href={site} target='_blank'>
                                    Aqui
                                </a>
                            </p>
                        )}
                        {videoUrl && (
                            <p className='video-url'>
                                Video de demostración y explicación{' '}
                                <a href={videoUrl}>Aqui</a>
                            </p>
                        )}
                    </div>
                    <div className='extra-contain'>
                        {parrafs[0] && <p>{parrafs[0]}</p>}
                        {parrafs[1] && <p>{parrafs[1]}</p>}
                        {imgExtra[0] && <img src={imgExtra[0]} />}
                        {parrafs[2] && <p>{parrafs[2]}</p>}
                        {imgExtra[1] && <img src={imgExtra[1]} />}
                        {parrafs[3] && <p>{parrafs[3]}</p>}
                        {imgExtra[2] && <img src={imgExtra[2]} />}
                        {parrafs[4] && <p>{parrafs[4]}</p>}
                        {imgExtra[3] && <img src={imgExtra[3]} />}
                    </div>
                </Modal>
            )}

            <div className='project-item-container'>
                <div className='view-more-button'>
                    <button onClick={toggleModal}>Ver más</button>
                </div>
                <div className='state-project-item'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        className='bi bi-circle-fill'
                        viewBox='0 0 18 18'>
                        <circle cx='8' cy='8' r='5' />
                    </svg>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        className='bi bi-circle-fill2'
                        viewBox='0 0 18 18'>
                        <circle cx='8' cy='8' r='5' />
                    </svg>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        className='bi bi-circle-fill3'
                        viewBox='0 0 18 18'>
                        <circle cx='8' cy='8' r='5' />
                    </svg>
                </div>
                <img src={img} alt={title} />
            </div>
        </>
    );
};
