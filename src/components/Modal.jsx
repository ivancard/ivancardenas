import '../scss/modal.scss';

export const Modal = ({ children, toggleModal }) => {
    return (
        <div className='modal-window'>
            <div className='modal-container'>
                <div className='state-bar-modal'>
                    <svg
                        onClick={toggleModal}
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        className='bi bi-circle-fill'
                        viewBox='0 0 18 18'>
                        <circle cx='8' cy='8' r='8' />
                    </svg>
                </div>
                {children}
            </div>
        </div>
    );
};
