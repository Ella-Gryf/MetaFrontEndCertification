import React from 'react';
import {Link} from 'react-router-dom';
import food from '../../../assets/restaurant-food.jpg';


const Hero = () => {
  return (
    <div className='homepage hero outer-box'>
      <div className='container grid'>
        <div className='content left'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='lead-text'>
            We are a family owned Mediterranean restaurant, focused on 
            traditional recipes served with a modern twist. 
          </p>
          <button className='btn'>
            <Link to='/reservations' style={{textDecoration: 'none', color: 'inherit'}}>
              Reserve a Table
            </Link>
          </button>
        </div>
        <div className='content right'>
          <img src={food} alt='restaurant food' />
        </div>
      </div>
    </div>
  )
}

export default Hero;