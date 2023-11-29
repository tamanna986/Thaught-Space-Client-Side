import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import MemberShip from "../Pages/MemberShip/MemberShip";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import MyProfile from "../Pages/DashBoardItems/MyProfile/MyProfile";
import AddPosts from "../Pages/DashBoardItems/AddPosts/AddPosts";
import MyPosts from "../Pages/DashBoardItems/MyPosts/MyPosts";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
            path: "/register",
            element: <Register></Register>,   
        }
        
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "myprofile",
          element: <MyProfile></MyProfile>
          
        },
        {
          path: "addposts",
          element: <AddPosts></AddPosts> 
          
        },
        {
          path: "myposts",
          element: <MyPosts></MyPosts>
          
        },
      ]
    }

    
  ]);
  