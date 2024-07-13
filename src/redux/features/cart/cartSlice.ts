
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../Types/TProduct';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartEmpty: (state) => {
      state.products = [];
      state.total = 0;
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      console.log(state.products)

      if (existing) {
        existing.quantity = existing.quantity! + 1;
        existing.stockQuantity = existing.stockQuantity! -1
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price +  (action.payload.price * 15) / 100;
      state.total = parseFloat(state.total.toFixed(2));
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }

      state.total -= action.payload.price +  (action.payload.price * 15) / 100;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= (action.payload.price * action.payload.quantity!) + (action.payload.price * action.payload.quantity! * 15) / 100;
    },
  },
});

export const { addToCart, removeFromCart, removeOne, setCartEmpty } = cartSlice.actions;

export default cartSlice.reducer;
