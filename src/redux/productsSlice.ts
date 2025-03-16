import { ProductModel } from "../model/ProductModel";
import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./productsAsyncThunk";

interface ProductsState {
    items: ProductModel[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  
  const initialState: ProductsState = {
    items: [],
    status: "idle",
    error: null,
  };

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload ?? `Something went wrong: ${action.error.message}`;
        });
    },
  });

export default productsSlice.reducer;