// FoodItem.tsx
import React from 'react';

interface FoodItemType {
  id: number;
  label: string;
  image: string;
  quantity: number;
}

interface FoodItemProps {
  item: FoodItemType;
  buttonDistinction: string;
  index: number;
  addToCart: (product: FoodItemType) => void;  // Use the type here
}

// interface FoodItemProps {
//   item: {
//     id: number;
//     label: string;
//     image: string;
//     addToCart: (product: FoodItem) => void;
//   };
//   buttonDistinction: string;
//   index: number;
// }

export const FoodItem: React.FC<FoodItemProps> = ({ item, buttonDistinction, index, addToCart }) => {
  return (
    <div className="food-item-card">
      <img src={item.image || ''} alt={item.label} className="food-item-image" />
      <button onClick={() => addToCart(item)} className="item-button">
        {buttonDistinction}
      </button>
    </div>
  );
};
