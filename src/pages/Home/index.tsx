import React from 'react';
import Carousel from '../../components/molecules/Carousel';
import Footer from '../../components/molecules/Footer';
import Navbar from '../../components/molecules/Navbar';
import Collection from '../../components/organisms/Collection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
