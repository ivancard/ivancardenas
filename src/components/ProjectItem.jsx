import { useModal } from '../hooks/useModal';

import '../scss/proyect-item.scss';
import { Modal } from './Modal';

export const ProjectItem = ({
    img,
    title,
    description,
    tecnologies,
    repository,
    site,
}) => {
    const [modal, toggleModal] = useModal();

    return (
        <>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <h1 className='title-modal'>{title}</h1>
                    <img className='img-modal' src={img} alt={title} />
                    <p className='p-modal'>{description}</p>
                    <div className='tecnologies-modal'>
                        <h2>Tecnologias usadas:</h2>
                        {tecnologies.map((tec) => (
                            <span className='tec'>{tec} </span>
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
                                Probala
                                <a href={site} target='_blank'>
                                    Aqui
                                </a>
                            </p>
                        )}
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
