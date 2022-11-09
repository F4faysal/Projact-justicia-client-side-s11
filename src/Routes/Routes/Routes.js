import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Page404 from "../../Pages/404/Page404";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
         loader: ()=> fetch('http://localhost:5000/service')
      },
      {
        path: "/services/details/:id",
        
        element: (
          <PrivateRoute>
            {/* <Checkout></Checkout> */}
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            {/* <SummaryCard></SummaryCard> */}
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
    ],
  },
]);
