import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

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
interface ErrorResponse {
    error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<FoodData | ErrorResponse>) {
    const { food } = req.query;

    try {
        const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=${food}&nutrition-type=cooking`);

        if (!response.ok) {
            throw new Error(`${response.status}:${response.statusText}`);
        }

        const data = await response.json() as FoodData;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
}

// export const fetchFoodData = (food: string) : Promise<FoodData> => {
//     return fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=${food}&nutrition-type=cooking`)
//         .then((response) => {
//             if(!response.ok) {
//                 throw new Error(`${response.status}:${response.statusText}`);
//             }
//             return response.json() as Promise<FoodData>;
//         })
//     }


