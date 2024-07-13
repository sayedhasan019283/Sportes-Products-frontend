/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Key, useState } from "react";
import {
  useFilterProductMutation,
  useGetProductQuery,
  useGetProductsBySearchTermQuery,
} from "../redux/product/productApi";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import { IProduct } from "../Types/TProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../redux/hooks";

const Product = () => {
  const [Result, setResult] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    maxPrice: "",
    minPrice: "",
    brand: "",
  });
// i cant show this conditional rendering
  const {products : navFilterProducts} = useAppSelector((state) => state.products);
  console.log('Nav navFilterProducts', navFilterProducts)

  const location = useLocation();
  const searchTerm = location.state?.searchTerm;

  const { data: SearchData } = useGetProductsBySearchTermQuery(searchTerm);
  const SearchProducts = SearchData?.data;
  // console.log(setFormData);
  const { data, isLoading } = useGetProductQuery(undefined);
 
  const products = data?.data;

  const [filterProductMutation] = useFilterProductMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
    const result: any = await filterProductMutation({
      data: formData,
    }).unwrap();
    setResult(result?.data);
    // Close the modal after submission
    setIsOpen(false);
    toast.success("successfully filtered data");
    setTimeout(() => {}, 2000);
    // window.location.href = "/product/all-product";
    // console.log(result?.data);
  };

  
  // console.log("this is org" , Result)
  const FilterResult = Result;
  const resetFilter = () => {
    // setFormData({
    //   category: "",
    //   maxPrice: "",
    //   minPrice: "",
    //   brand: "",
    // });
    window.location.href = "/";
  };

  console.log("filter res",FilterResult)
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <button
        className="mt-28 fixed btn-secondary top-0 left-0 ml-4 btn size-16 mr-9 w-24 z-10"
        onClick={() => setIsOpen(true)}
      >
        Filter
      </button>
      <button
        className="mt-52 fixed btn-primary top-0 left-0 ml-4 btn size-16 mr-9 w-24 z-10"
        onClick={resetFilter}
      >
        Reset Filter
      </button>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {isOpen && (
        <dialog className="modal " open>
          <div className=" fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center ">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="maxPrice"
                >
                  Max Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  placeholder="Max Price"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="minPrice"
                >
                  Min Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleChange}
                  placeholder="Min Price"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="brand"
                >
                  Brand
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="Brand"
                />
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
      {SearchProducts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SearchProducts.map(
            (product: IProduct, index: Key | null | undefined) => (
              <ProductCard key={index} product={product} />
            )
          )}
        </div>
      )}

      {FilterResult.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FilterResult.map(
            (product: IProduct, index: Key | null | undefined) => (
              <ProductCard key={index} product={product} />
            )
          )}
        </div>
      )}
      

      {!SearchProducts && FilterResult.length === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product: IProduct, index: Key | null | undefined) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Product;
