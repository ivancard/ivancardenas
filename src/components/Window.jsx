import '../scss/window.scss';

export const Window = ({ children }) => {
    return (
        <div className='windows-container'>
            <div className='window-back'></div>
            <div className='window'>
                <div className='state-window'>
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
                <div className='children-container'>{children}</div>
            </div>
        </div>
    );
};
