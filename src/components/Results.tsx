import React from 'react';
import { FoodItem } from './FoodItem';

interface FoodItem {
  id: number;
  label: string;
  image: string;
  // Other properties
}

interface ResultsProps {
  searchedResults: FoodItem[];
  handleItem: (item: FoodItem) => void; // Ensure handleItem is required
}

export const Results: React.FC<ResultsProps> = ({ searchedResults, handleItem }) => {
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
                  handleItem={handleItem} // Pass handleItem prop here
                  index={index} // Pass index prop here
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
