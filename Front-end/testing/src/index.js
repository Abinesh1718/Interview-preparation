import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PaginationExample from './App';
import Login from './login';
import Header from './Header';
import { Provider } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import store from './redux/Store';
import Cart from './Cart';
import Usememo from './Usememo';
import Home from './Piza/Home';
import About from './Piza/About';
import Menu from './Piza/Menu';
import Contact from './Piza/Contact';
import Countown from './Project/Countown';
import Accordian from './Project/Accordian';
import Model from './Project/Model';
import Filter from './Project/Filter';
import CustomeTable from './Project/CustomeTable';
import Transfer from './Project/Transfer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/memo' element={<Usememo />} />
        <Route path='/header' element={<Header />} />
        <Route path='/countwon' element={<Countown />} />
        <Route path='/accordian' element={<Accordian />} />
        <Route path='/model' element={<Model />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/customtable' element={<CustomeTable />} />

        <Route path='/transfer' element={<Transfer />} />
        
      </Routes >
    </BrowserRouter>
  </Provider>
);

