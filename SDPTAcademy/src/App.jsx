import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Courses from './Pages/Courses/Courses';
import ProtectedRoutes from './components/Protected/ProtectedRoutes';
import Login from './Pages/Login/Login';

const ScrollToTop = () =>{
  const location = useLocation();

  useEffect(()=>{
    
    window.scrollTo(0,0);
  }, [location]);

  return null;
}



function App() {
  const [count, setCount] = useState(0)
//temp lng to di ko alam paano lagay tong ScrollToTop sa router dun sa main T^T..
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Login' element={<Login/>}/>

        <Route element={<ProtectedRoutes/>}>
          
        </Route>
      </Routes>
    </Router>
  )
}

export default App
