import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Courses from './components/Courses/Courses.jsx'

const Router = createBrowserRouter([
{
  path: "/",
  element: <App/>
},
{
  path: "Home",
  element: <Home/>

},
{
  path: "AboutUs",
  element: <AboutUs/>
},
{
  path: "Courses",
  element: <Courses/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {Router}/>
  </StrictMode>,
)
