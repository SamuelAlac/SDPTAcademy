import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Courses from './components/Courses/Courses';
import ProtectedRoutes from './components/Protected/ProtectedRoutes';

const ScrollToTop = () =>{
  const location = useLocation();

  useEffect(()=>{
    
    window.scrollTo(0,0);
  }, [location]);

  return null;
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='Courses' element={<Courses/>}/>

        <Route element={<ProtectedRoutes/>}>
          
        </Route>
      </Routes>
    </Router>
  )
}

export default App
