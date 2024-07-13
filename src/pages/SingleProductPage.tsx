import { NavLink, useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetOneProductByIdQuery,
} from "../redux/product/productApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ratings from "./Ratings";
import { useAppDispatch } from "../redux/hooks";
import { IProduct } from "../Types/TProduct";
import { addToCart } from "../redux/features/cart/cartSlice";

const SingleProductpage = () => {
  const productId = useParams();
  // console.log(productId.id);
  const dispatch = useAppDispatch();
  const { data } = useGetOneProductByIdQuery(productId.id);

  const [deleteProduct] =
    useDeleteProductMutation();

  // console.log(data?.data)
  const product = data?.data;
  console.log(product?._id);

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      console.log("Deleted successfully");
      toast.success("Deleted successfully");
      setTimeout(() => {
        window.location.href = "/product/all-product"; // Redirect to the products page after showing the toast
      }, 3000);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast.success("Successfully Product Add To Card");
    // console.log(product)
  };
  return (
    <div className="flex flex-col lg:flex-row bg-base-100 w-full shadow-xl">
      <figure className="w-full lg:w-1/2">
        <img
          src={
            product?.image ??
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt={product?.name ?? "Shoes"}
        />
      </figure>
      <div className="card-body w-full lg:w-1/2">
        <h2 className="card-title">
          {product?.name ?? "Shoes"}
          <div className="badge badge-secondary">Hot item</div>
        </h2>
        <p>{product?.description}</p>
        <p>stock quantity : {product?.stockQuantity}</p>
        <p>price : {product?.price}</p>
        <p>category : {product?.category}</p>
        <p>brand : {product?.brand}</p>
        <Ratings rating={product?.rating}></Ratings>
        <button
          className="btn btn-primary"
          onClick={() => handleDelete(product?._id)}
        >
          Delete Product
        </button>
        <NavLink className='btn btn-secondary' to={`/product/update/${product?._id}`}>Update Product</NavLink>
        <button
            className={`btn ${
              product?.stockQuantity ? "btn-neutral" : "btn-disabled"
            }`}
            onClick={() => handleAddProduct(product)}
          >
            Add To Cart
          </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleProductpage;
