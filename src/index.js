import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

import App from './App'

import  './components/Navigation'


const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(rootElement);
root.render(app);