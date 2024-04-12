// FoodItem.tsx
import React from 'react';

interface FoodItemProps {
  item: {
    id: number;
    label: string;
    image: string;
  };
  handleItem: (item: any) => void;
  buttonDistinction: string;
  index: number;
}

export const FoodItem: React.FC<FoodItemProps> = ({ item, handleItem, buttonDistinction, index }) => {
  return (
    <div key={index} className="food-item-card">
      <img src={item.image || ''} alt={item.label} className="food-item-image" />
      <button onClick={() => handleItem(item)} className="item-button">
        {buttonDistinction}
      </button>
    </div>
  );
};
