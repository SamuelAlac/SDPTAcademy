import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import Courses from './Pages/Courses/Courses.jsx'

// const Router = createBrowserRouter([
// {
//   path: "/",
//   element: <App/>
// },
// {
//   path: "Home",
//   element: <Home/>

// },
// {
//   path: "AboutUs",
//   element: <AboutUs/>
// },
// {
//   path: "Courses",
//   element: <Courses/>
// }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router = {Router}/> */}
    <App/>
  </StrictMode>,
)
