import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import CardCoffees from './components/CardCoffees/CardCoffees';
import Coffees from './components/Coffees/Coffees';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1 className='text-6xl font-bold mt-36 text-center text-gray-700'>Page 404 Not Found</h1>,
    children:[
      {
        path:"/",
        element: <Home />,
        loader: ()=> fetch(`/categories.json`),
        children:[
          {
            path:"/",
            element: <CardCoffees />,
            loader: () => fetch(`/coffees.json`)
          },
          {
            path:"/category/:category",
            element: <CardCoffees />,
            loader: () => fetch(`/coffees.json`)
          }
        ]
      },
      {
        path:"/coffees",
        element: <Coffees />,
        loader: ()=> fetch(`/coffees.json`)
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
