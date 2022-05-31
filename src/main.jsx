import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeaderNav } from './components/HeaderNav';
import { AboutMe } from './components/AboutMe';

import './index.css';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MiFooter } from './components/MiFooter';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HeaderNav />
        <AboutMe />
        <Projects />
        <Contact />
        <MiFooter />
    </React.StrictMode>
);
