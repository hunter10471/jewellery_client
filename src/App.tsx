import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/Footer';
import Navbar from './components/molecules/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='products/' element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
