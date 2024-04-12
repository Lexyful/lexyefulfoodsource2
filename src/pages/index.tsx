import React, { useState } from 'react';
import { Home } from '@/components/Home';
import { Header } from '@/components/Header';

interface SearchResult {
  id: number;
  label: string;
  image: string;
}

const App: React.FC = () => {
  const [searchedResults, setSearchedResults] = useState<SearchResult[]>([]);
  const [selectedItems, setSelectedItems] =  useState<SearchResult[]>([]);

  const fetchFoodData = async (food: string) => {
    try { 
      const response = await fetch('/api/getFood', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(!response.ok){
        throw new Error('Error fetching data')
      }
      const data = await response.json();
      //this is where i'll call setSearchedResults with data
        setSearchedResults([]);
    } catch(error) {
        console.error('failed to fetch: ', error)
    }
  }



  const handleSearch = (query: string): Promise<SearchResult[]> => {
    return new Promise((resolve, reject) => {
      fetchFoodData(query)
        .then((data: FoodData) => {
          if (data && data.hints) {
            const newArray: SearchResult[] = data.hints.map((hint: any) => ({
              id: hint.food.foodId,
              label: hint.food.label,
              image: hint.food.image,
            }));
            resolve(newArray);
          } else {
            resolve([]);
          }
        })
        .catch((error: Error) => {
          console.error('Error fetching data', error);
          reject(error);
        });
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



  // CONVERT TO A TRY CATH   VVVVVVV


  //     .then((data: FoodData[]) => {
  //       if (data && data.length > 0 && data[0].food) {
  //         const newArray: SearchResult[] = data.map((item: FoodData) => ({
  //           id: item.food.foodId,
  //           label: item.food.label,
  //           image: item.food.image,
  //         }));
  //         setSearchedResults(newArray);
  //         return newArray;
  //       } else {
  //         setSearchedResults([]);
  //         return [];
  //       }
  //     })
  //     .catch((error: Error) => {
  //       console.error('Error fetching data', error);
  //       setSearchedResults([]);
  //       return []; 
  //     });