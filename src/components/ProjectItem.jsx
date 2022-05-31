import { Window } from './Window';

import '../scss/proyect-item.scss';

export const ProjectItem = ({ img, description }) => {
    return (
        <div className='project-item-container'>
            <div className='view-more-button'>
                <button>Ver más</button>
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
            <img src={img} alt={description} />
        </div>
    );
};
