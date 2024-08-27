import React,{Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ToggleSidebar} from "./components/root/root.jsx"


const Home = React.lazy(() => import("./pages/home.jsx"));
const About = React.lazy(() => import("./pages/about.jsx"));
 const router = createBrowserRouter([
  {
    path: "/",
    element:<ToggleSidebar/>,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
        
      },
    ],
  },
]);

export default router;