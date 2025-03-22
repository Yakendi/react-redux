import { ProductModel } from "../../model/ProductModel";
import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./productsAsyncThunk";
import getSingleProductByIDAsyncThunk from "../getSingleProduct/getSingleProductAsyncThunk";
import createProductThunk from "../createProduct/createProductAsyncThunk";

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
      // get products list
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
        })

        // get single product
        .addCase(getSingleProductByIDAsyncThunk.pending, (state) => {
          state.status = "loading";
        })
        .addCase(getSingleProductByIDAsyncThunk.fulfilled, (state, action) => {
          state.status = "succeeded";
        })
        .addCase(getSingleProductByIDAsyncThunk.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload ?? `Something went wrong: ${action.error.message}`;
        })

        // create
        .addCase(createProductThunk.pending, (state) => {
          state.status = "loading";
        })
        .addCase(createProductThunk.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.items.unshift(action.payload);
        })
        .addCase(createProductThunk.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload ?? `Something went wrong: ${action.error.message}`;
        });
    },
  });

export default productsSlice.reducer;