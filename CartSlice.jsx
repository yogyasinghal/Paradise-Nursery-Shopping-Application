import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // array of products in cart
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      } else {
        existingItem.quantity++;
      }

      state.totalQuantity++;
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity++;
        state.totalQuantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          state.totalQuantity--;
        } else {
          // if only 1 → remove item
          state.items = state.items.filter((item) => item.id !== id);
          state.totalQuantity--;
        }
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    }
  }
});

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem
} = cartSlice.actions;

export default cartSlice.reducer;
``
