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
import DashboardHome from "../Pages/DashBoardItems/DashboardHome/DashboardHome";
import PostDetail from "../Pages/Home/PostDetail/PostDetail";
import Comment from "../Pages/Comment/Comment";



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
        },
        {
            path: "/post/:id",
            element: <PostDetail></PostDetail>,  
            loader: ({params}) => fetch(`https://thaught-space-server.vercel.app/posts/${params.id}`) 
        }
        
        
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/dashboard",
          element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
          
        },
        {
          path: "myprofile",
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
          
        },
        {
          path: "addposts",
          element: <PrivateRoute><AddPosts></AddPosts> </PrivateRoute>
          
        },
        {
          path: "myposts",
          element: <PrivateRoute><MyPosts></MyPosts></PrivateRoute>
          // children: [
          //   {
          //     path: "comment/:id",
          //     element: <Comment></Comment>,
          //     // loader: ({ params }) => fetch(`https://thaught-space-server.vercel.app/comments/${params.id}`)
          //     loader: ({ params }) => fetch(`https://thaught-space-server.vercel.app/comments/${params.id}`)
          //   },
          // ]
          
        },
        {
          path: "allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          
        },
        {
          path: "comment/:id",
          element: <Comment></Comment>,  
          loader: ({params}) => fetch(`https://thaught-space-server.vercel.app/comments/${params.id}`) 
      },
        {
          path: "/dashboard/payment",
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
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
  