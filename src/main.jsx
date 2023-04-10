import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Blog from './pages/Blog';
import Home from './components/Home';
import SingleJobDetail from './components/SingleJobDetail';


const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async()=>fetch('webdata.json') 
            },
            {
                path:'/:jobid',
                element:<SingleJobDetail></SingleJobDetail>,
                loader:async({params})=>fetch(`webdata.json/${params.jobid}`)
            },
            
        ]
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
