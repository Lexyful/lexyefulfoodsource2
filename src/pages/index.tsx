import React, { useState } from 'react';
import { fetchFoodData } from '@/pages/api/apicalls';
import { Home } from '@/components/Home';
import { Header } from '@/components/Header';

interface SearchResult {
  id: number;
  label: string;
  image: string;
}

const App: React.FC = () => {
  const [searchedResults, setSearchedResults] = useState<SearchResult[]>([]);
  const [selectedItems, setSelectedItems] = useState<SearchResult[]>([]);

  const handleSearch = (query: string): Promise<SearchResult[]> => { 
    return fetchFoodData(query)
      .then((data: FoodData[]) => {
        if (data && data.length > 0 && data[0].food) {
          const newArray: SearchResult[] = data.map((item: FoodData) => ({
            id: item.food.foodId,
            label: item.food.label,
            image: item.food.image,
          }));
          setSearchedResults(newArray);
          return newArray;
        } else {
          setSearchedResults([]);
          return [];
        }
      })
      .catch((error: Error) => {
        console.error('Error fetching data', error);
        setSearchedResults([]);
        return []; 
      });
  };

  return (
    <div className="App">
      <h1>Hi</h1>
      <Header handleSearch={handleSearch}  /> 
      <Home />
    </div>
  );
}

export default App;
