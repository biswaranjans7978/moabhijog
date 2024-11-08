import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Abhijogpage from './components/Abhijogpage/Abhijogpage.jsx';
import Thanks from './components/Thankspage/Thanks.jsx';
import Home from './components/Home/Home.jsx';
import Status from './components/Showfile/Status.jsx';


const routes =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/abhijogpage",
        element:<Abhijogpage />
      },
      {
        path:"/thanks",
        element:<Thanks/>
      },
      {
        path:"status",
        element:<Status/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes}/>
  </React.StrictMode>,
)
