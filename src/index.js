
// importing the react library
import React from 'react';
import ReactDOM from 'react-dom/client';

// css styles 
import './index.css';

// app component
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* render the app component */}
    <App />
  </React.StrictMode>
);
