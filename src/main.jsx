import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App'; // Ensure the path is correct
import { ThemeProvider } from './context/ThemeContext'; // Ensure the path is correct
import {} from './index.css'
// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App within the ThemeProvider
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
