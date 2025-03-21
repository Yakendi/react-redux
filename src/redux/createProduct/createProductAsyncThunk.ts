import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductModel } from "../../model/ProductModel";
import { createProduct } from "../../services/getProducts";

const createProductThunk = createAsyncThunk<ProductModel, Partial<ProductModel>, { rejectValue: string }>(
  "create/product",
   async (product, { rejectWithValue }) => {
    try {
      return await createProduct(product);
    } catch (error) {
      return rejectWithValue(error as string);
    }
});

export default createProductThunk;
