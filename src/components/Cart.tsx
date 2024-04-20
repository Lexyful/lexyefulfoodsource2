import React from "react";
import { FoodItem } from "./FoodItem";

interface FoodItemType {
  id: number;
  label: string;
  image: string;
  quantity: number;
}

interface CartProps {
  selectedItems: FoodItemType[];
}

export const Cart: React.FC<CartProps> = ({ selectedItems }) => {
  return (
    <div className="cart-container">
      {selectedItems.length > 0 ? (
        <div className="cart-grid">
          <h2>This is your Cart</h2>
          <div className="cart-items">
            {selectedItems.map((item) => (
              <div key={item.id}>
                <FoodItem 
                  item={item} 
                  buttonDistinction={'Remove'} 
                  addToCart={() => {}} 
                  index={selectedItems.indexOf(item)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h3>Sorry, no items in your cart.</h3>
      )}
    </div>
  );
};


// export const Cart = ({ selectedItems, deleteSelectedItem, addOneItem, removeOneItem, calculateTotalQuantity, checkOut }) => {
//   return (
//       <div className="cart-container">
//           <h2>This is your Cart</h2>
//           <div className="cart-items">
//               {selectedItems.map((item, index) => (
//                   <div key={item.id}>
//                       <FoodItem  key={index} index={index} item={item} handleItem={deleteSelectedItem} buttonDistinction={'Remove'} />
//                       <div className="quantity-controls">
//                           <button className="more-or-less" onClick={() => addOneItem(item)}>+</button>
//                           <p>{item.quantity}</p>
//                           <button className="more-or-less" onClick={() => removeOneItem(item)}>-</button>
//                       </div>
//                   </div>
//               ))}
//           </div>
//           <h2>Total quantity {calculateTotalQuantity}</h2>
//           {/* <NavLink to="/"> */}
//               <button onClick={checkOut}>Checkout</button>
//           {/* </NavLink> */}
//       </div>
//   );
// };