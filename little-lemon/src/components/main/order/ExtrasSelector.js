import React, { useState } from 'react';
import './ItemCard.css';

const ExtrasSelector = ({ availableExtras, handleExtrasChange }) => {
  const [selectedExtras, setSelectedExtras] = useState({});

  const handleQuantityChange = (extra, newQuantity) => {
    setSelectedExtras((prevSelectedExtras) => ({
      ...prevSelectedExtras,
      [extra.id]: newQuantity,
    }));

    handleExtrasChange({
      ...selectedExtras,
      [extra.id]: newQuantity,
    });
  };

  const handleIncrement = (extra) => {
    handleQuantityChange(extra, (selectedExtras[extra.id] || 0) + 1);
  };

  const handleDecrement = (extra) => {
    const currentQuantity = selectedExtras[extra.id] || 0;
    if (currentQuantity > 0) {
      handleQuantityChange(extra, currentQuantity - 1);
    }
  };

  return (
    <div className='extra-options'>
      <h3>Add Extras</h3>
      <ul >
        {availableExtras.map((extra) => (
          <li key={extra.id} className='extra-container'>
            <div className='extra-item'>
              <span>{extra.name}</span>
            </div>
            <div className='extra-scale'>
              <button onClick={() => handleDecrement(extra)}>-</button>
              <span className='quantity'>{selectedExtras[extra.id] || 0}</span>
              <button onClick={() => handleIncrement(extra)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtrasSelector;