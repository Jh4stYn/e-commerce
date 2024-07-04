import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cart from "./slices/cart.slice";
import purchases from "./slices/purchases.slice";

const store = configureStore({
    reducer: {
        products,
        cart,
        purchases,
    }
})

export default store; 