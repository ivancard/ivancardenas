import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeaderNav } from './components/HeaderNav';
import { AboutMe } from './components/AboutMe';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HeaderNav />
        <AboutMe />
    </React.StrictMode>
);
