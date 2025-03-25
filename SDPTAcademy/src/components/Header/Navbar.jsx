import React from 'react'
import { Link } from 'react-router-dom'
import SDPTLogo from '../../assets/SDPT Logo.svg'
import HomeIcon from '../../assets/Home Icon.svg'
import AboutUsIcon from '../../assets/AboutUs Icon.svg'
import CoursesIcon from '../../assets/Courses Icon.svg'
import ProfileIcon from '../../assets/Account Icon.svg'
import './navbar.css'


const Navbar = ({className}) => {
  return (

    <nav className={`navbar navbar-expand-sm ${className} navbar-dark py-3 fixed-top`}>
        <div className="container-fluid px-3 d-flex align-items-center">
            <a href="#" className='navbar-brand d-flex align-items-center'>
                <img src={SDPTLogo} className='img-fluid pe-2' alt="" />
                <span className='lead fw-bold'>SDPT</span> Academy
            </a>

            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className="collapse navbar-collapse" id = "navmenu">
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <img className='img-fluid' src={HomeIcon} alt="" />
                    <p className='mb-0'>Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AboutUs">
                    <img className='img-fluid' src={AboutUsIcon} alt="" />
                    <p className='mb-0'>About Us</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Courses">
                    <img className='img-fluid' src={CoursesIcon} alt="" />
                    <p className='mb-0'>Courses</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Auth">
                    <img className='img-fluid' src={ProfileIcon} alt="" />
                    <p className='mb-0'></p>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar