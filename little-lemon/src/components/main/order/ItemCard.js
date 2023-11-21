import React, {useState} from 'react';
import './ItemCard.css';
import ExtrasSelector from './ExtrasSelector';
import basket from '../../../assets/Basket.svg';

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
          <section className='row row-1' aria-label="Dish item and price">
            <h1>{dish.item}</h1>
            <h2>{`£${dish.price}.00`}</h2>
          </section>
          <section className='row row-2'>
            {(dish.item === 'Greek Salad') && 
            <img className='dish-img' src={saladImg} alt='Image of Greek Salad'/>}
            {(dish.item === 'Bruchetta') && 
            <img className='dish-img' src={bruchettaImg} alt='Image of Bruchetta'/>}
            {(dish.item === 'Lemon Dessert') && 
            <img className='dish-img' src={dessertImg} alt='Image of Lemon Dessert'/>}
            <p className='highlight-text'>{dish.description}</p>
          </section>
          <section className='row row-3' aria-label='choose extras'>
            <ExtrasSelector
              availableExtras={dish.addOns}
              handleExtrasChange={handleExtrasChange}
            />
            <img className='icon' src={basket} alt='basket icon, add order to basket' />
          </section>
      </div> 
    </div>
  )
}

export default ItemCard;