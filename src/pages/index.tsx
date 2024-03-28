import React, { useState } from 'react';
import { fetchFoodData } from '@/data/apicalls';
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

  const handleSearch = (query: string): Promise<void> => {
    return fetchFoodData(query)
      .then((data: any) => {
        if (data.hints) {
          const newArray: SearchResult[] = data.hints.map((hint: any) => ({
            id: hint.food.foodId,
            label: hint.food.label,
            image: hint.food.image,
          }));
          setSearchedResults(newArray);
        } else {
          setSearchedResults([]);
        }
      })
      .catch((error: Error) => {
        console.error('Error fetching data', error);
        setSearchedResults([]);
      });
  };

  return (
    <div className="App">
      <h1>Hi</h1>
      <Header handleSearch={handleSearch}/>
      <Home />
    </div>
  );
}

export default App;
