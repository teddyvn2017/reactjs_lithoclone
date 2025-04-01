import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],  // Đổi tên từ cart thành cartItems
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === product.id); // Sử dụng cartItems
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...product, quantity: 1 }); // Sử dụng cartItems
            }
        },
        
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find((item) => item.id === id);
            if (item) {
                item.quantity = Math.max(1, quantity); // Đảm bảo số lượng không nhỏ hơn 1
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== productId); // Sử dụng cartItems
        },
        clearCart: (state) => {
            state.cartItems = [];  // Sử dụng cartItems
        },
    }
});

export const { addToCart, updateQuantity,removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
