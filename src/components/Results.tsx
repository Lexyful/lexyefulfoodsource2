import React from 'react';
import { FoodItem } from './FoodItem';

interface FoodItem {
  id: number;
  label: string;
  image: string;
  quantity: number;
}

interface ResultsProps {
  searchedResults: FoodItem[];
  addToCart: (product: FoodItem) => void;
}

export const Results: React.FC<ResultsProps> = ({ searchedResults, addToCart }) => {
  return (
    <div>
      {searchedResults.length > 0 ? (
        <div className="results-container">
          <div className="food-grid">
            <div className="food-items">
              {searchedResults.map((item, index) => (
                <FoodItem
                  key={item.id}
                  item={item}
                  buttonDistinction={'Add to Cart'}
                  addToCart={addToCart}
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h3>Sorry, no results found!</h3>
      )}
    </div>
  );
};
