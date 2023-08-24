import { useState } from 'react';
import { motion } from 'framer-motion';
import '../scss/header-nav.scss';
import { Window } from './Window';

//import fotoPerfil from '../assets/foto-perfil.png';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='2'
    stroke='#404040'
    strokeLinecap='round'
    {...props}
  />
);

export const HeaderNav = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <header className='header-container' id='header'>
      <nav>
        <div className='logo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='105'
            height='105'
            viewBox='0 0 105 105'
          >
            <g
              id='Grupo_1'
              data-name='Grupo 1'
              transform='translate(-240 -35)'
              style={{ isolation: 'isolate' }}
            >
              <g
                id='Rectángulo_1'
                data-name='Rectángulo 1'
                transform='translate(240 35)'
                fill='#efece6'
                stroke='#707070'
                strokeWidth='3'
              >
                <rect width='105' height='105' stroke='none' />
                <rect x='1.5' y='1.5' width='102' height='102' fill='none' />
              </g>
              <g
                id='Rectángulo_2'
                data-name='Rectángulo 2'
                transform='translate(240 35)'
                fill='#efece6'
                stroke='#707070'
                strokeWidth='2'
              >
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <g
                id='Rectángulo_3'
                data-name='Rectángulo 3'
                transform='translate(292 87)'
                fill='#efece6'
                stroke='#707070'
                strokeWidth='2'
              >
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <g
                id='Rectángulo_4'
                data-name='Rectángulo 4'
                transform='translate(292 35)'
                fill='#efece6'
                stroke='#707070'
                strokeWidth='2'
              >
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <g
                id='Rectángulo_5'
                data-name='Rectángulo 5'
                transform='translate(240 87)'
                fill='#efece6'
                stroke='#707070'
                strokeWidth='2'
              >
                <rect width='53' height='53' stroke='none' />
                <rect x='1' y='1' width='51' height='51' fill='none' />
              </g>
              <text
                id='I'
                transform='translate(259.5 71.5)'
                fill='#707070'
                stroke='#707070'
                strokeWidth='1'
                fontSize='30'
                fontFamily='UbuntuMono-Bold, Ubuntu Mono'
                fontWeight='700'
              >
                <tspan x='0' y='0'>
                  I
                </tspan>
              </text>
              <text
                id='C'
                transform='translate(311.5 123.5)'
                fill='#707070'
                stroke='#707070'
                strokeWidth='1'
                fontSize='30'
                fontFamily='UbuntuMono-Bold, Ubuntu Mono'
                fontWeight='700'
              >
                <tspan x='0' y='0'>
                  C
                </tspan>
              </text>
            </g>
          </svg>
        </div>
        <ul>
          <li>
            <div>
              <div className='button'>
                <a href='#header'>Inicio</a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='button'>
                <a href='#sobreMi'>Sobre Mi</a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='button'>
                <a href='#proyectos'>Mis Proyectos</a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='button'>
                <a href='#contacto'>Contacto</a>
              </div>
            </div>
          </li>
        </ul>
        <button onClick={() => toggleOpen(!isOpen)}>
          <motion.svg
            animate={isOpen ? 'open' : 'closed'}
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 menu-icon'
            fill='none'
            viewBox='0 0 24 24'
          >
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d='M 2 9.423 L 20 9.423'
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </motion.svg>
        </button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='nav-mobile-container'
        >
          <nav>
            <ul>
              <li>
                <a href='#header'>Inicio</a>
              </li>
              <li>
                <a href='#sobreMi'>Sobre Mi</a>
              </li>
              <li>
                <a href='#proyectos'>Mis Proyectos</a>
              </li>
              <li>
                <a href='#contacto'>Contacto</a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
      <div className='header-window-container'>
        <Window>
           {/* <img src={fotoPerfil} alt='foto de perfil' className='foto-perfil' /> */}
          <div className='window-text'>
            <h3>Hola, mi nombre es</h3>
            <h1>Ivan Cardenas</h1>
            <h5>iOS Developer</h5>
          </div>
        </Window>
      </div>
    </header>
  );
};
