
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../Types/TProduct';

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action ) => {
        state.products = action.payload;
      },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
