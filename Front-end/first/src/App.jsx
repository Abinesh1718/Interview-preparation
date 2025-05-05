import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import { useSelector } from 'react-redux';
import Table from './pages/Table';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart  />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/table" element={<Table />} />
        
      </Routes>
    </>
  );
};

export default App;