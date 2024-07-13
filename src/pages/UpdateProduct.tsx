import { useParams } from "react-router-dom";
import { useGetOneProductByIdQuery, useUpdateProductMutation } from "../redux/product/productApi";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    description: "",
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const {id} = useParams();
  console.log(id);
  

  const { data} = useGetOneProductByIdQuery(id);
  const product = data?.data;
//   console.log(product);

  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Updated successfully");
      setTimeout(() => {
        window.location.href = "/product/all-product"; // Redirect to the products page after showing the toast
      }, 3000);
    await updateProduct({ productId : id , data: formData });
    // console.log(formData);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="w-full max-w-lg p-8 border rounded shadow-lg bg-white"  onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="brand"
            name="brand"
            readOnly
            className="w-full px-3 py-2 border rounded mt-2"
            value={product?.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="category"
            name="category"
            readOnly
            className="w-full px-3 py-2 border rounded mt-2"
            value={product?.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            id="description"
            name="description"
            placeholder="Input product description"
            className="w-full px-3 py-2 border rounded mt-2"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="image"
            name="image"
            readOnly
            className="w-full px-3 py-2 border rounded mt-2"
            value={product?.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            readOnly
            className="w-full px-3 py-2 border rounded mt-2"
            value={product?.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            id="price"
            name="price"
            readOnly
            className="w-full px-3 py-2 border rounded mt-2"
            value={product?.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            step="0.1"
            id="rating"
            name="rating"
            readOnly
            value={product?.rating}
            placeholder="Input product rating"
            className="w-full px-3 py-2 border rounded mt-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            readOnly
            className="w-full px-3 py-2 border rounded mt-2"
            value={product?.stockQuantity}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary w-full mt-4" type="submit">Submit</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default UpdateProduct;
