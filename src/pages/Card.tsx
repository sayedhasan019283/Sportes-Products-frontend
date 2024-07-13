import { Key } from "react";
import { useGetProductQuery } from "../redux/product/productApi";
import { IProduct } from "../Types/TProduct";
import ProductCard from "./ProductCard";

const Card = () => {
    const { data,  isLoading } = useGetProductQuery(undefined);
    // console.log(data)
    if (isLoading) return <p>Loading...</p>;
  
    // Assuming data structure, adjust as per your API response
    const products = data?.data; // Adjust this based on your API response structure

    // console.log(products)


    return (
       

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">

        {products.slice(0, 3).map((product: IProduct, index: Key | null | undefined) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      );
};

export default Card;
