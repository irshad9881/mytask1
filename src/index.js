import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/toplevel.css';   // Base styles
import './styles/variables.css';  // Theme variables
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
