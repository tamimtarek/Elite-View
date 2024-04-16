import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivetRoute from "./PrivetRoute";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Error from "../Pages/Error/Error";
import Property from "../Pages/Property/Property";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/updateprofile",
            element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/profile",
          element: <PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
          path: "/property/:id",
          element: <PrivetRoute><CardDetails></CardDetails></PrivetRoute>
        },
        {
          path: "/selectedproperty",
          element: <PrivetRoute><Property></Property></PrivetRoute>
        }
      ]
    },
  ]);

  export default router;