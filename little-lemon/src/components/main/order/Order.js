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

        <div className="order-option">
          <img src={greeksalad} alt='salad' className='order-img' />
          <button className='btn'>
            <Link to='/order/salad' style={{textDecoration: 'none', color: 'inherit'}}>
              Greek Salad
            </Link>
          </button>
        </div>

        <div className="order-option">
          <img src={bruchetta} alt='bruchetta' className='order-img' />
          <button className='btn'>
            <Link to='/order/bruchetta' style={{textDecoration: 'none', color: 'inherit'}}>
              Bruchetta
            </Link>
          </button>
        </div>
        
        <div className="order-option">
          <img src={dessert} alt='lemon dessert' className='order-img' />
          <button className='btn'>
            <Link to='/order/dessert' style={{textDecoration: 'none', color: 'inherit'}}>
              Lemon Dessert
            </Link>
          </button>
        </div>
        

      </div>
    </div>
  );
};

export default Order;