import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import MainBody from './components/MainBody'

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <MainBody></MainBody>
    </>
);