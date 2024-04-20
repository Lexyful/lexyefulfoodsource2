import React, { useEffect } from 'react';
import { FoodItem as FoodItemComponent } from './FoodItem';

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
  const noDupes = searchedResults.filter((item, index, self) =>
    index === self.findIndex((t) => t.id === item.id)
  );
  // Debugging effect to log duplicate IDs
  useEffect(() => {
    const ids = new Set();
    noDupes.forEach(item => {
      if (ids.has(item.id)) {
        console.error('Duplicate ID found:', item.id);
      }
      ids.add(item.id);
    });
  }, [noDupes]);

  return (
    <div>
      {noDupes.length > 0 ? (
        <div className="results-container">
          <div className="food-grid">
            <div className="food-items">
              {noDupes.map((item, index) => (
                <FoodItemComponent
                  key={`${item.id}_${index}`} // Changed to use a combination of id and index
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



// import React from 'react';
// import { FoodItem } from './FoodItem';

// interface FoodItem {
//   id: number;
//   label: string;
//   image: string;
//   quantity: number;
// }

// interface ResultsProps {
//   searchedResults: FoodItem[];
//   addToCart: (product: FoodItem) => void;
// }

// export const Results: React.FC<ResultsProps> = ({ searchedResults, addToCart }) => {
//   return (
//     <div>
//       {searchedResults.length > 0 ? (
//         <div className="results-container">
//           <div className="food-grid">
//             <div className="food-items">
//               {searchedResults.map((item, index) => (
//                 <FoodItem
//                   key={item.id}
//                   item={item}
//                   buttonDistinction={'Add to Cart'}
//                   addToCart={addToCart}
//                   index={index} 
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <h3>Sorry, no results found!</h3>
//       )}
//     </div>
//   );
// };
