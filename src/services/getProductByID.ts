import axios from "axios";
import { BASE_URL } from "./getProducts";
import { ProductModel } from "../model/ProductModel";

const getProductByID = async (id: string) => {
  try {
    const response = await axios.get<ProductModel>(BASE_URL + "/" + id);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else if (error instanceof Error) {
      throw error;
    }
  }
};

export default getProductByID;