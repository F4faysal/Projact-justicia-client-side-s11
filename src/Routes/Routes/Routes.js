import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import Main from "../../layout/Main";
import MyReviews from "../../MyReviews/MyReviews";
import Page404 from "../../Pages/404/Page404";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Details from "../../Pages/Services/Details/Details";
import EditReview from "../../Pages/Services/Details/EditReview/EditReview";
import Services from "../../Pages/Services/Services";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/my-reviews",
        element:<MyReviews></MyReviews>
      },
      {
        path: "/add-service",
        element:  <AddService></AddService>  
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
         loader: ()=> fetch('https://justicia-server.vercel.app/service')
      },
      {
        path: "/edit-review/:id",
        element: <EditReview></EditReview>,
        loader : ({params}) => fetch(`https://justicia-server.vercel.app/review/${params.id}`) ,

      },
      {
        path: "/services/:id",
        element:<Details></Details>,
        loader : ({params}) => fetch(`https://justicia-server.vercel.app/service/${params.id}`) ,
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
    ],
  },
]);
