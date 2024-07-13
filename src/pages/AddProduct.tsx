import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddProductMutation } from "../redux/product/productApi";

const categories = [
  { value: "Cricket", label: "Cricket" },
  { value: "Football", label: "Football" },
  { value: "Hoki", label: "Hoki" },
  { value: "Badminton", label: "Badminton" },
  { value: "Volleyball", label: "Volleyball" },
  { value: "Basketball", label: "Basketball" },
];

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: '',
    brand: "",
    stockQuantity: "",
    rating: "",
    price: "",
    image: "",
  });
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    formData.category = event.target.value
    // console.log(event.target.value)
  };

  const [AddProduct] = useAddProductMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddProduct({ data: formData });
    toast.success("Product Added successfully");
    setTimeout(() => {
      window.location.href = "/product/all-product"; // Redirect to the products page after showing the toast
    }, 3000);
    // console.log(formData);
    
  };
//   console.log(categories)
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="w-full max-w-lg p-8 border rounded shadow-lg bg-white"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Input Product name"
            className="w-full px-3 py-2 border rounded mt-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            placeholder="Input Product description"
            className="w-full px-3 py-2 border rounded mt-2"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="category"
            className="w-full px-3 py-2 border rounded mt-2"
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select product category
            </option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="brand"
            placeholder="Input Product brand"
            className="w-full px-3 py-2 border rounded mt-2"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="stockQuantity"
            placeholder="Input Product stock quantity"
            className="w-full px-3 py-2 border rounded mt-2"
            value={formData.stockQuantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Input product rating"
            value={formData.rating}
            className="w-full px-3 py-2 border rounded mt-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Input Product price"
            className="w-full px-3 py-2 border rounded mt-2"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            placeholder="Input Product image URL"
            className="w-full px-3 py-2 border rounded mt-2"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary w-full mt-4" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
