import React from 'react';
import {Link} from 'react-router-dom';
import './Order.css';

import greeksalad from '../../../assets/greeksalad.jpg';
import bruchetta from '../../../assets/bruchetta.svg';
import dessert from '../../../assets/lemondessert.jpg';


const Order = () => {

  return (
    <div className='order outer-box'>
      <div className='container'> 
        <section className="order-option" aria-label='order Greek Salad'>
          <img src={greeksalad} alt='salad' className='order-img' />
          <Link to='/order/salad' className='btn'>Greek Salad</Link>
        </section>
        <section className="order-option" aria-label='order bruchetta'>
          <img src={bruchetta} alt='bruchetta' className='order-img' />
          <Link to='/order/bruchetta' className='btn'>Bruchetta</Link>
        </section>
        <section className="order-option" aria-label='order lemon dessert'>
          <img src={dessert} alt='lemon dessert' className='order-img' />
          <Link to='/order/dessert' className='btn'>Lemon Dessert</Link>
        </section>
      </div>
    </div>
  );
};

export default Order;