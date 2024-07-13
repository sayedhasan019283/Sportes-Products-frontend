import { useState } from "react";
import { useAppSelector } from "../redux/hooks";


const Checkout = () => {
    const [scheduled, setScheduled] = useState<boolean>(false);
    const { products, total } = useAppSelector((state) => state.cart);
  
    return (
      <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
        <div className="max-w-3xl w-full">
          <h1 className="mb-2 text-xl font-semibold">Delivery Information</h1>
          <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
            <div className="flex gap-5">
              <div className="w-full space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="text" 
                    id="email" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                  />
                </div>
              </div>
              <div className="w-full space-y-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input 
                    type="text" 
                    id="phone" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea 
                id="address" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              />
            </div>
            <div className="flex items-center gap-2 mt-5">
              <label className="text-lg">Scheduled Delivery</label>
              <button 
                type="button" 
                onClick={() => setScheduled(!scheduled)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Toggle</span>
                <span className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${scheduled ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
                <input 
                  type="text" 
                  id="note" 
                  disabled={!scheduled} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-3">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  disabled={!scheduled} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                />
              </div>
            </div>
            <div className="mt-3">
              <label className="text-lg">Payment method</label>
              <div className="flex gap-5 mt-5">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="r1" 
                    name="payment" 
                    value="online" 
                    className="h-4 w-4 border-gray-300 focus:ring-indigo-500" 
                  />
                  <label htmlFor="r1" className="text-sm font-medium text-gray-700">Online payment</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="r2" 
                    name="payment" 
                    value="cash" 
                    className="h-4 w-4 border-gray-300 focus:ring-indigo-500" 
                  />
                  <label htmlFor="r2" className="text-sm font-medium text-gray-700">Cash on delivery</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg w-full">
          <h1 className="mb-2 text-xl font-semibold">Order Summary</h1>
          <div className="border border-gray-300 rounded-md h-[60vh] p-10 flex flex-col">
            <div className="flex-grow mb-2 space-y-2 overflow-auto">
              {products.map((product) => (
                <div key={product?._id} className="flex justify-between items-center bg-gray-100 p-1 rounded-lg">
                  <div className="flex items-center">
                    <img src={product.image} className="h-[82px] rounded-md mr-2" alt={product.name} />
                    <div>
                      <h1 className="text-lg mb-2">{product.name}</h1>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl mr-5">{product.quantity}</h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-lg">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
              <div className="flex justify-between text-lg">
                <p>Delivery</p>
                <p>${products?.length * 5}</p>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p>{total + products?.length * 5}</p>
              </div>
              <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Checkout;