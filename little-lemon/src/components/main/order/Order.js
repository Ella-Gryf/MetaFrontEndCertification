import React from 'react';
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';
import './Order.css';

import greeksalad from '../../../assets/greeksalad.jpg';

const Order = () => {

  return (
    <div className='order outer-box'>
      <div className='container'>        
        <button className='btn'>
          <Link to='/order/salad' style={{textDecoration: 'none', color: 'inherit'}}>
            Greek Salad
          </Link>
        </button>
        <button className='btn'>
          <Link to='/order/bruchetta' style={{textDecoration: 'none', color: 'inherit'}}>
            Bruchetta
          </Link>
        </button>
        <button className='btn'>
          <Link to='/order/dessert' style={{textDecoration: 'none', color: 'inherit'}}>
            Lemon Dessert
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Order;