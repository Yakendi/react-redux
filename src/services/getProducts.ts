import axios from "axios";
import { ProductModel } from "../model/ProductModel";

export const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error.response?.data?.message)
)

export const getProducts = async (): Promise<ProductModel[]> => {
    const response = await api.get<ProductModel[]>("/products");
    return response.data;
  };

export default getProducts;