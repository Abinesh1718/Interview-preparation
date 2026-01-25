// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import storess from '../src/redux-manul/Store'
import CountryProblem from './CountryProblem';
import Login from './login';
import Signup from './signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storess} >
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </Provider>
);
