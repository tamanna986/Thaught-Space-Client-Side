import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import MemberShip from "../Pages/MemberShip/MemberShip";
import LogIn from "../Pages/LogIn/LogIn";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,   
        },
        {
            path: "/membership",
            element: <MemberShip></MemberShip>,   
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,   
        }
      ]
    },
  ]);
  