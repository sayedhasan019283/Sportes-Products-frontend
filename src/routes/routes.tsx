import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import SingleProductpage from '../pages/SingleProductPage';
import AllProductPage from '../pages/AllProductPage/AllProductPage';
import Product from '../pages/Product';
import About from '../pages/About';
import UpdateProduct from '../pages/UpdateProduct';
import AddProduct from '../pages/AddProduct';
import Checkout from '../pages/Checkout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element:<HomePage/>
      },
      {
        path:'/product/:id',
        element:<SingleProductpage/>
      },
      {
        path:'/about-us',
        element:<About/>
      },
      {
        path:'/checkout',
        element:<Checkout/>
      },
      {
        path:'/product/update/:id',
        element:<UpdateProduct/>
      },
      {
        path:'/add-product',
        element:<AddProduct/>
      },
      {
        path:'/product/',
        element:<AllProductPage/>,
        children: [
          {
            path: 'all-product',
            element:<Product/>
          }
        ]
      },

    ]
  },
]);

export default router;
