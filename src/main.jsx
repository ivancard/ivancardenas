import React from 'react';
import ReactDOM from 'react-dom/client';

import { LanguageProvider } from './context/LanguageContext';
import { HeaderNav } from './components/HeaderNav';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MiFooter } from './components/MiFooter';
import { ScrollToTop } from './components/ScrollToTop';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <HeaderNav />
      <AboutMe />
      <Projects />
      <Contact />
      <MiFooter />
      <ScrollToTop />
    </LanguageProvider>
  </React.StrictMode>
);
