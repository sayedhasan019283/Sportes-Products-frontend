import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cart/cartSlice";
import productReducer from './features/products/productSlice'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cartOrder",
  storage,
};

const persistedCartOrderReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: persistedCartOrderReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
