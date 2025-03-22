import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleProductByID } from "../../services/getProducts";
import { ProductModel } from "../../model/ProductModel";

const getSingleProductByIDAsyncThunk = createAsyncThunk<ProductModel, number, { rejectValue: string }>(
    "fetcj/singleProduct",
    async (id: number, { rejectWithValue }) => {
        try {
            return await getSingleProductByID(id);
        } catch (error) {
            return rejectWithValue(error as string);
        }
    }
);

export default getSingleProductByIDAsyncThunk;