import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import SideBar from './components/Sidebar';
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';




const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>

      </Routes>
      <SideBar />
      <Footer />

    </Router>


  </div>;
};

export default App;
