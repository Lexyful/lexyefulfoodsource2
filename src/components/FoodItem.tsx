import React from "react";

interface FoodItemProps {
    item: {
        foodId: string;
        label: string;
        knownAs: string;
        nutrients: {
          ENERC_KCAL: number;
          PROCNT: number;
          FAT: number;
          CHOCDF: number;
          FIBTG: number;
        };
        category: string;
        categoryLabel: string;
        image: string;
        measures: {
          uri: string;
          label: string;
          weight: number;
          qualified?: {
            qualifiers: {
              uri: string;
              label: string;
            }[];
            weight: number;
          }[];
        }[]; 
    };
    handleItem: (item: any) => void ; // ?????????
    // const newArray: SearchResult[] = data.hints.map((hint: any) => ({
    //     id: hint.food.foodId,
    //     label: hint.food.label,
    //     image: hint.food.image,
    //   }));
    buttonDistinction: string;
    index: number;
}

export const FoodItem: React.FC<FoodItemProps> = ({ item, handleItem, buttonDistinction, index }) => {
    return (
        <div key={index} className="food-item-card">
            <img src={item.image || ''} alt={item.label} className="food-item-image" />
            <button onClick={() => handleItem(item)} className="item-button">{buttonDistinction}</button> 
        </div>
    )
}