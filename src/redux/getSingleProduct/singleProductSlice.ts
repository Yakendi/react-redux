import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../model/ProductModel";
import getSingleProductByIDAsyncThunk from "./getSingleProductAsyncThunk";

interface SingleProductState {
    item: ProductModel;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: SingleProductState = {
    item: {} as ProductModel,
    status: "idle",
    error: null,
}

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {
        clearProduct: (state) => {
            state.item = {} as ProductModel;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSingleProductByIDAsyncThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getSingleProductByIDAsyncThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.item = action.payload;
            })
            .addCase(getSingleProductByIDAsyncThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload ?? `Something went wrong: ${action.error.message}`;
            })
    }
});

export const { clearProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;