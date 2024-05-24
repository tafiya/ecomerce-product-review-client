import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Products from "../pages/product/Products";
import ProductView from "../pages/quickView/ProductView";
import Dashboard from "../layouts/Dashboard";

import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/Dashboard/Admin/ManageUser/AllUsers";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import MyPost from "../pages/Dashboard/Admin/MyPost/MyPost";
import AllReview from "../pages/Dashboard/Admin/allReview/AllReview";
import PrivateRouter from "./PrivateRouter";
import Contact from "../pages/contact/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'products',
          element:<Products></Products>
        },
        {
          path:'productView/:id',
          element:<PrivateRouter><ProductView></ProductView></PrivateRouter>,
          loader: ()=> fetch(`http://localhost:5300/products`)
         
        }
      ]
    },
    {path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [  
    {
        path: 'manageUser',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'myPosts',
        element:<AdminRoute><MyPost></MyPost></AdminRoute>,

      },
      {
          path: 'adminProfile',
          element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
      {
          path: 'allReview',
          element: <AdminRoute><AllReview></AllReview></AdminRoute>
        },

    ]
  }
  ]);