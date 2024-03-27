interface Food {
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
brand: string;
category: string;
categoryLabel: string;
foodContentsLabel: string;
image: string;
servingSizes: {
    uri: string;
    label: string;
    quantity: number;
}[];
servingsPerContainer: number;
}

interface Measure {
    uri: string;
    label: string;
    weight: number;
}

interface FoodData {
    food: Food;
    measures: Measure[];
}

export const fetchFoodData = (food: string) : Promise<FoodData> => {
    return fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=${food}&nutrition-type=cooking`)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`${response.status}:${response.statusText}`);
            }
            return response.json() as Promise<FoodData>;
        })
    }


