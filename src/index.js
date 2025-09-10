import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

import App from './App'
import Navbar from './components/Navigation'
import Footer from './components/footer/footer'

import  './components/Navigation'
import {ThemeProvider } from 'styled-components';


const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(rootElement);
root.render(app);