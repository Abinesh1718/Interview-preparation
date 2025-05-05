// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import DashboardPage from './DashboardPage';
import storess from '../src/redux-manul/Store'
import CountryProblem from './CountryProblem';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storess}>
    <Router>
      <App />
    </Router>
  </Provider>
);
