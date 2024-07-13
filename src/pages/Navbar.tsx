import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetProductQuery } from "../redux/product/productApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../redux/features/cart/cartSlice";
import { setProducts } from "../redux/features/products/productSlice";

const Navbar = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const { data } = useGetProductQuery(search);
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
  };
  // console.log("cart products", products);

 
  // console.log( 'search product',data);
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/product/all-product">All Product</NavLink>
            </li>
            <li>
              <NavLink to="/add-product">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/about-as">About Us</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Sports products
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/product/all-product">All Product</NavLink>
          </li>
          <li>
            <NavLink to="/add-product">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/about-as">About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex navbar-end">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto mr-3"
              onBlur={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="mr-3">
              Search
            </button>
          </form>
        </div>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <div className="indicator ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item text-red-500 ">
                {products?.length}
              </span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-80 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {products?.length} Items
              </span>
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex bg-base-300 p-2 rounded-lg"
                >
                  <div className="w-1/2 border border-blue-500 ">
                    <img src={product?.image} alt="" />
                  </div>
                  <div className="pl-4">
                    <p className="text-xl">{product?.name}</p>
                    <div className=" flex justify-center items-center mt-2 ">
                      <FontAwesomeIcon
                        onClick={() => dispatch(addToCart(product))}
                        className="mr-5"
                        icon={faPlus}
                      />
                      <FontAwesomeIcon
                        onClick={() => dispatch(removeFromCart(product))}
                        className="mr-5"
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        onClick={() => dispatch(removeOne(product))}
                        icon={faMinus}
                      />
                    </div>
                    <div className="mt-3">
                      <p>Product Quantity: {product?.quantity}</p>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
              <span className="text-red-500">
                The total price including 15%
              </span>
              <span className="text-info">Subtotal: ${total}</span>
              <div className="card-actions">
                <NavLink to="/checkout" className="btn btn-neutral btn-block">
                  Proceed to Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {data && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data?.map(
            (product: IProduct, index: Key | null | undefined) => (
              <ProductCard key={index} product={product} />
            )
          )}
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
