import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Carrera from './Carrera';
import Panamera from './Panamera';
import Cayman from './Cayman';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/carrera" element={<Carrera />} />
    <Route path="/panamera" element={<Panamera />} />
    <Route path="/cayman" element={<Cayman />} />
  </Routes>
  </Router>,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

