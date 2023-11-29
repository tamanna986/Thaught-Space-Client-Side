import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </HelmetProvider>
  </QueryClientProvider>
 </AuthProvider>
)
