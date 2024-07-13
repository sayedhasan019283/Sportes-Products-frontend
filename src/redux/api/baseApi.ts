import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sports-product-assignment-4-backend.vercel.app',
    // https://sports-product-assignment-4-backend.vercel.app
    credentials: 'include',
  }),

  endpoints: () => ({}),
});