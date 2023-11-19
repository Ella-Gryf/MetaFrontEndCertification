import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css'; 



const Card = ({image, vars}) => {
  return (
    <div className='specials-card'>
      <img src={image} alt='food item' />
      <div className="head">
        <h3>{vars.item}</h3>
        <h4>{`£${vars.price}.00`}</h4>
      </div>
      <p>{vars.description}</p>
      <Link className='btn order-btn' to='/order' aria-label={`Order ${vars.item} for a delivery`}>
        Online a delivery
      </Link>
    </div>
  );
};

export default Card;