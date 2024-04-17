import React from "react";
import { FoodItem } from "./FoodItem";

interface FoodItem {
  id: number;
  label: string;
  image: string;
  quantity: number;
}

// Define the interface for props expected by the Cart component
interface CartProps {
  selectedItems: FoodItem[];  // This should be an array of FoodItem objects
}

// Apply the CartProps interface to your component props
export const Cart: React.FC<CartProps> = ({ selectedItems }) => {
  return (
    <div className="cart-container">
      <h2>This is your Cart</h2>
      <div className="cart-items">
        {selectedItems.map((item, index) => (
          <div key={item.id}>
            <FoodItem key={index} index={index} item={item} buttonDistinction={'Remove'} addToCart={function (product: FoodItem): void {
              throw new Error("Function not implemented.");
            } } />
          </div>
        ))}
      </div>
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