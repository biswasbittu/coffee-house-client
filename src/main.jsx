import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Addcoffee from './components/Addcoffee/Addcoffee.jsx';
import Updatecoffee from './components/Updatecoffee/Updatecoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'addcoffee',
        Component:Addcoffee
      },
      {
        path:'updatecoffee',
        Component:Updatecoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />,
  
)
