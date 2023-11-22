import React from 'react';
import {Link} from 'react-router-dom';
import { MdOutlineDeliveryDining } from "react-icons/md";
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
      <div className='card-btn'>
        <Link className='order-btn' to='/order' aria-label={`Order ${vars.item} for a delivery`}>
          Order a delivery
        </Link>
        <Link to='/order' aria-label={`Order ${vars.item} for a delivery`}>
          <MdOutlineDeliveryDining className='order-btn icon'/>
        </Link>
      </div>
    </div>
  );
};

export default Card;