import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/Footer';
import Navbar from './components/molecules/Navbar';
import CartPage from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className='mt-[80px]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='products/' element={<Products />} />
          <Route path='products/:category' element={<Products />} />
          <Route path='cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
