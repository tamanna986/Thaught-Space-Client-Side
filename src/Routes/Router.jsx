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
import AllUsers from "../Pages/DashBoardItems/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AdminProfile from "../Pages/DashBoardItems/AdminProfile/AdminProfile";
import MakeAnnouncement from "../Pages/DashBoardItems/MakeAnnouncement/MakeAnnouncement";
import ReportedActivity from "../Pages/DashBoardItems/ReportedActivity/ReportedActivity";
import Payment from "../Pages/DashBoardItems/Payment/Payment";



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
        {
          path: "allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          
        },
        {
          path: "/dashboard/payment",
          element: <Payment></Payment>
        },
        {
          path: "/dashboard/adminprofile",
          // path: "/dashboard",
          element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
        {
          
          path: "/dashboard/announcement",
          element: <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
        },
        {
          
          path: "/dashboard/reportedactivities",
          element: <AdminRoute><ReportedActivity></ReportedActivity></AdminRoute>
        }
      ]
    }

    
  ]);
  