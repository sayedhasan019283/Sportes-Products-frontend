import { NavLink } from "react-router-dom";
import { IProduct } from "../Types/TProduct";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Ratings from "./Ratings";

interface ProductProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast.success("Successfully Product Add To Card");
    // console.log(product)
  };
  AOS.init();
  return (
    <div className="card bg-base-100 w-96 shadow-xl" data-aos="zoom-out-right">
      <figure>
        <img
          src={
            product?.image ??
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt={product?.name ?? "Shoes"}
        />
      </figure>
      <div className="card-body">
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
        <div className="card-footer flex justify-between p-4 ">
          <button
            className={`btn ${
              product.stockQuantity ? "btn-primary" : "btn-disabled"
            }`}
            onClick={() => handleAddProduct(product)}
          >
            Add To Cart
          </button>
          <NavLink to={`/product/${product._id}`} className="btn btn-secondary">
            View Details
          </NavLink>
        </div>
      </div>
      <ToastContainer  />
    </div>
  );
};

export default ProductCard;
