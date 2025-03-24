import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./getProducts/productsSlice";
import singleProductReducer from "./getSingleProduct/singleProductSlice";
import modalReducer from "./modal/createModalSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        singleProduct: singleProductReducer,
        modal: modalReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;