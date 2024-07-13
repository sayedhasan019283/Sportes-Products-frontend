import { baseApi } from "../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getProduct: builder.query({
        query: (searchTerm) => ({
          url: searchTerm ? `/products/products?searchTerm=${searchTerm}` : '/products/products',
          method: 'GET',
        }),
      }),
        getOneProductById: builder.query({
            query: (productId) => ({
              url: `/products/product/${productId}`,
              method: 'GET',
            }),
          }),
        getProductsBySearchTerm: builder.query({
            query: (searchTerm) => `products/product?searchTerm=${searchTerm}`,
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
              url: `/products/product/${productId}`,
              method: 'DELETE',
            }),
          }),
          updateProduct: builder.mutation({
            query: ({productId , data }) => {
              console.log('Updating product with ID:', productId);
              console.log('Data to update:', data);
              return {
                url: `/products/product/${productId}`,
                method: 'PUT',
                body: data,
              };
            },
          }),
          addProduct: builder.mutation({
            query: ({ data }) => {
              console.log('Data to update:', data);
              return {
                url: '/products/product',
                method: 'POST',
                body: data,
              };
            },
          }),
          filterProduct: builder.mutation({
            query: ({ data }) => {
              console.log('Data to update:', data);
              return {
                url: '/products/filter',
                method: 'POST',
                body: data,
              };
            },
          }),
          
    })
})

export const {useGetProductQuery, useGetOneProductByIdQuery, useGetProductsBySearchTermQuery, useDeleteProductMutation, useUpdateProductMutation, useAddProductMutation, useFilterProductMutation} = productApi;