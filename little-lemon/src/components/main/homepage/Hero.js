import React from 'react';
import {Link} from 'react-router-dom';
import food from '../../../assets/restaurant-food.jpg';

const Hero = () => {
  return (
    <div className='homepage hero outer-box'>
      <div className='container grid'>
        <section className='content left'>
          <h1 className='display-title'>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='lead-text'>
            We are a family owned Mediterranean restaurant, focused on 
            traditional recipes served with a modern twist. 
          </p>
          <Link className='btn' to='/reservations' aria-label='Reserve a table at Little Lemon'>
            Reserve a Table
          </Link>
        </section>
        <section className='content right'>
          <img src={food} alt='Mediterranean Cuisine' />
        </section>
      </div>
    </div>
  )
}

export default Hero;