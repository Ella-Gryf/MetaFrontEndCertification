import React from 'react';
import Hero from '../homepage/Hero';
import Specials from '../homepage/Specials';
import Testimonials from '../homepage/Testimonials';
import About from '../homepage/About';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  )
}

export default Homepage;