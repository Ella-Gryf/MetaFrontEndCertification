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
        <section className='row row-1'>
          <h1>This week's specials!</h1>
          <Link className='btn large-btn' to='/menu' aria-label='View the online menu'>Online Menu</Link>
        </section>
        <section className='row row-2'>
          <Card image={saladImg} vars={greekSalad} />
          <Card image={bruchettaImg} vars={bruchetta} />
          <Card image={dessertImg} vars={dessert} />
        </section>
      </div>
    </div>
  )
}

export default Specials;