import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductModel } from "../../model/ProductModel";
import { getProducts } from "../../services/getProducts";

const fetchProducts = createAsyncThunk<ProductModel[], void, { rejectValue: string }>(
  "fetch/products", 
  async (_, { rejectWithValue }) => {
    try {
      return await getProducts();
    } catch (error) {
      return rejectWithValue(error as string);
    }
});

export default fetchProducts;
