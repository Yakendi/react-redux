import axios from "axios";
import { ProductModel } from "../model/ProductModel";

export const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = "Произошла ошибка";

    if (error.response) {
      errorMessage =
        error.response.data?.message || `Ошибка ${error.response.status}`;
    } else if (error.request) {
      errorMessage = "Данные не получены. Возможно отсутствует подключение к сети.";
    } else {
      errorMessage = error.message;
    }

    return Promise.reject(errorMessage);
  }
);

const getProducts = async (): Promise<ProductModel[]> => {
  const response = await api.get<ProductModel[]>("/products");
  return response.data;
};

const createProduct = async (product: Partial<ProductModel>) => {
  const response = await api.post<ProductModel>("/products", product);
  return response.data;
};

export { getProducts, createProduct };
