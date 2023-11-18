import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.js';

import saladImg from '../../../assets/greeksalad.jpg';
import bruchettaImg from '../../../assets/bruchetta.svg';
import dessertImg from '../../../assets/lemondessert.jpg';

import {greekSalad, bruchetta, dessert} from '../../../variables/menuVars.js';

const Specials = () => {

  return (
    <div className='homepage specials outer-box'>
      <div className='container flex'>

        <div className='row row-1'>
          <h1>This week's specials!</h1>
          <button className='btn large-btn'>
            <Link to='/menu' style={{textDecoration: 'none', color: 'inherit'}}>
              Online Menu
            </Link>
          </button>
        </div>
        
        <div className='row row-2'>
          
          <Card image={saladImg} vars={greekSalad} />
          <Card image={bruchettaImg} vars={bruchetta} />
          <Card image={dessertImg} vars={dessert} />

        </div>
      
      </div>
    </div>
  )
}

export default Specials;