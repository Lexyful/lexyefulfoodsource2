// FoodItem.tsx
import React from 'react';

interface FoodItemProps {
  item: {
    id: number;
    label: string;
    image: string;
  };
  buttonDistinction: string;
  index: number;
}

export const FoodItem: React.FC<FoodItemProps> = ({ item, buttonDistinction, index }) => {
  return (
    <div key={index} className="food-item-card">
      <img src={item.image || ''} alt={item.label} className="food-item-image" />
      <button  className="item-button">
        {buttonDistinction}
      </button>
    </div>
  );
};
