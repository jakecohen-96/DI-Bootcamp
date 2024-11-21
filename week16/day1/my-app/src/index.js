import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Example JSX (if you want to test React Fragment separately)
const jsxElement = (
  <React.Fragment>
    <h2>Hello {2 + 2}</h2>
    <p>bla bla bla</p>
  </React.Fragment>
);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();