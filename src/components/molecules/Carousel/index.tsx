import React from 'react';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carouselData } from '../../../dummy-data/data';
import CarouselItem from './CarouselItem';

const responsive = {
  all: {
    breakpoint: { max: 6000, min: 0 },
    items: 1,
  },
};

const Carousel = () => {
  return (
    <Slider containerClass='h-[70vh]' responsive={responsive}>
      {carouselData.map((slide) => (
        <CarouselItem {...slide} />
      ))}
    </Slider>
  );
};

export default Carousel;
