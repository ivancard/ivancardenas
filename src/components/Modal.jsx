import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import '../scss/modal.scss';

export const Modal = ({ children, toggleModal, ariaLabel = 'Modal' }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') toggleModal();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [toggleModal]);

  return ReactDOM.createPortal(
    <motion.div
      className='modal-window'
      role='dialog'
      aria-modal='true'
      aria-label={ariaLabel}
      onClick={(e) => { if (e.target === e.currentTarget) toggleModal(); }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className='modal-container'
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className='state-bar-modal'>
          <button
            ref={closeButtonRef}
            className='modal-close-btn'
            onClick={toggleModal}
            aria-label='Cerrar modal'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              className='bi bi-circle-fill'
              viewBox='0 0 18 18'
            >
              <circle cx='8' cy='8' r='8' />
            </svg>
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
};
