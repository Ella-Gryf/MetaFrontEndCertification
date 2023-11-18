import React from 'react';
import './Card.css'; 



const Card = ({image, vars}) => {
  return (
    <div className='specials-card'>
      <img src={image} alt='food' />
      
      <div className="head">
        <h3>{vars.item}</h3>
        <h4>{`£${vars.price}.00`}</h4>
      </div>
      
      <p>{vars.description}</p>
      <div className='order-btn'>
        <button className="btn">Order a delivery</button>
      </div>
      
    </div>
  );
};

export default Card;