import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// state.cart: Đây là reducer cartReducer đã được khai báo trong store.js.
const store = configureStore({
    reducer: {
        // khai báo cartReducer với tên key là cart trong Redux store.
        cart: cartReducer   ,
    },
});

export default store;