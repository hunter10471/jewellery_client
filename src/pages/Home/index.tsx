import React from 'react';
import Carousel from '../../components/molecules/Carousel';
import Footer from '../../components/molecules/Footer';
import Navbar from '../../components/molecules/Navbar';
import BestSeller from '../../components/organisms/BestSeller';
import Collection from '../../components/organisms/Collection';
import NewRelease from '../../components/organisms/NewRelease';
import OurStory from '../../components/organisms/OurStory';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Collection />
      <NewRelease />
      <BestSeller />
      <OurStory />
      <Footer />
    </div>
  );
};

export default Home;
