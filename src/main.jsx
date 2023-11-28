import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
    <HelmetProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </HelmetProvider>
 </AuthProvider>
)
