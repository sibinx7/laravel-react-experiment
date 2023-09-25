import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './src/App.js';



window.onload =  () => {
  const pageRoot = document.createElement("div");  
  pageRoot.id = "root";
  document.body.appendChild(pageRoot);
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement)
  root.render(
    <Router>
      <App />
    </Router>    
  );
}