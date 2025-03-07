import axios from "axios";
import { ProductModel } from "../model/ProductModel";

export const BASE_URL = 'https://fakestoreapi.com/products';

const getProducts = async () => {
    try {
        const response = await axios.get<ProductModel[]>(BASE_URL);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        } else if (error instanceof Error) {
            throw error;
        }
    }
}

export default getProducts;