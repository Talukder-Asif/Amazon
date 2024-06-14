import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home";
import Product from "../Pages/Product/Product";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/product",
          element: <Product></Product>,
        //   loader: () => fetch(`https://dummyjson.com/products`)
        },
        {
          path: "/product/:id",
          element: <SingleProduct></SingleProduct>,
          loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
          path: "/dashboard",
          element: <div>Dashboard</div>
        }
      ]
    },
  ]);

export default router;