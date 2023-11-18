import React, {useState} from 'react';
import './ItemCard.css';
import ExtrasSelector from './ExtrasSelector';

import saladImg from '../../../assets/greeksalad.jpg';
import bruchettaImg from '../../../assets/bruchetta.svg';
import dessertImg from '../../../assets/lemondessert.jpg';


const ItemCard = ({dish}) => {

  const [selectedExtras, setSelectedExtras] = useState({});

  const handleExtrasChange = (extras) => {
    setSelectedExtras(extras);
  };


  return (
    <div className='item-card outer-box'>
      <div className='container'>
          <div className='row row-1'>
            <h1>{dish.item}</h1>
            <h2>{`£${dish.price}.00`}</h2>
          </div>
          <div className='row row-2'>
            {(dish.item === 'Greek Salad') && <img src={saladImg} alt='food image'/>}
            {(dish.item === 'Bruchetta') && <img src={bruchettaImg} alt='food image'/>}
            {(dish.item === 'Lemon Dessert') && <img src={dessertImg} alt='food image'/>}
            <p className='highlight-text'>{dish.description}</p>
          </div>
          <div className='row row-3'>
            <ExtrasSelector
              availableExtras={dish.addOns}
              handleExtrasChange={handleExtrasChange}
            />
          </div>
      </div> 
    </div>
  )
}

export default ItemCard;