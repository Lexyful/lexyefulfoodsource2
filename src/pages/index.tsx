// App.tsx
import React, { useState } from 'react';
import { Home } from '@/components/Home';
import { Header } from '@/components/Header';
import { Results } from '@/components/Results';

interface FoodItem {
  id: number;
  label: string;
  image: string;
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
        }));
        setSearchedResults(newArray);
      } else {
        setSearchedResults([]);
      }
    } catch (error) {
      console.error('failed to fetch: ', error);
    }
  };

  const handleItem = (item: FoodItem) => {
    // Handle item selection here
    console.log('Selected item:', item);
  };

  return (
    <div className="App">
      <h1>Hi</h1>
      <Header handleSearch={fetchFoodData} />
      <Home />
      <Results searchedResults={searchedResults} handleItem={handleItem} />
    </div>
  );
};

export default App;
