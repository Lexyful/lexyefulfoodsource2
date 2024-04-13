// App.tsx
import React, { useState } from 'react';
import { Home } from '@/components/Home';
import { Header } from '@/components/Header';
import { Results } from '@/components/Results';

interface FoodItem {
  id: number;
  label: string;
  image: string;
  quantity: number;
}

const App: React.FC = () => {
  const [searchedResults, setSearchedResults] = useState<FoodItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<FoodItem[]>([]);

  const fetchFoodData = async (food: string) => {
    try {
      const response = await fetch(`/api/getFood?food=${food}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      if (data && data.hints) {
        const newArray: FoodItem[] = data.hints.map((hint: any) => ({
          id: hint.food.foodId,
          label: hint.food.label,
          image: hint.food.image,
          quantity: 0
        }));
        setSearchedResults(newArray);
      } else {
        setSearchedResults([]);
      }
    } catch (error) {
      console.error('failed to fetch: ', error);
    }
  };

  const addToCart = (product: FoodItem) => {
    const cartItemIndex = selectedItems.findIndex(item => item.id === product.id);
    if (cartItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      const cartItem = updatedItems[cartItemIndex];
      if (cartItem) {  
        cartItem.quantity++;
        setSelectedItems(updatedItems);
      }
    } else {
      const newItem = { ...product, quantity: 1 };
      setSelectedItems([...selectedItems, newItem]);
    }
  };
  

  return (
    <div className="App">
      <h1>Hi</h1>
      <Header handleSearch={fetchFoodData} />
      <Home />
      <Results searchedResults={searchedResults} addToCart={addToCart}/>
    </div>
  );
};

export default App;
