import { useState, useEffect, use } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Courses from './Pages/Courses/Courses';
import ProtectedRoutes from './components/Protected/ProtectedRoutes';
import Auth from './Pages/Login/Auth';
import CoursePreview from './Pages/Courses/CoursePreview';
import OtpVerification from './components/otp/OtpVerification';
import ProfileDashboard from './Pages/ProfileDashboard/ProfileDashboard';
import CoursePlaylist from './Pages/Courses/CoursePlaylist';

const ScrollToTop = () =>{
  const location = useLocation();

  useEffect(()=>{
    
    window.scrollTo(0,0);
  }, [location]);

  return null;
}


function App() {

//temp lng to di ko alam paano lagay tong ScrollToTop sa router dun sa main T^T..
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Auth' element={<Auth/>}/>
        <Route path='/CoursePreview' element={<CoursePreview/>}/>
        <Route path='otp' element={<OtpVerification/>}/>

        {/* Only authenticated users may have access to this paths */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/CoursePlaylist' element={<CoursePlaylist/>}/>
          <Route path='ProfileDashboard' element={<ProfileDashboard/>}/>
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
