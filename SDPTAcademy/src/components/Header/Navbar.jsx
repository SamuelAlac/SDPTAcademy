import React from 'react'
import { Link } from 'react-router-dom'
import SDPTLogo from '../../assets/SDPT Logo.svg'
import HomeIcon from '../../assets/Home Icon.svg'
import AboutUsIcon from '../../assets/AboutUs Icon.svg'
import CoursesIcon from '../../assets/Courses Icon.svg'
import ProfileIcon from '../../assets/Account Icon.svg'
import './navbar.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase-config"; 
import { toast, Toaster } from 'react-hot-toast';


const Navbar = ({ className }) => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Toaster toastOptions={{ duration: 4000 }} /> {/* Add this */}
      <nav className={`navbar navbar-expand-sm ${className} navbar-dark py-3 fixed-top`}>
        <div className="container-fluid px-3 d-flex align-items-center">
            <a href="/" className='navbar-brand d-flex align-items-center'> 
                <img src={SDPTLogo} className='img-fluid pe-2' alt=""  />
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
                <li className="nav-item dropdown">
                  <Link className="nav-linkdropdown-toggle" 
                    to="/#"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {user ? (
                      <img src={user?.photoURL || ProfileIcon} alt="User Profile" className="profile-pic" />
                    ) : (
                      <img className="img-fluid profile-pic" src={ProfileIcon} alt="Default Profile" />
                    )}
                    </Link>
                  <ul className="dropdown-menu dropdown-menu-end bg-warning text-white" >
                    {user ? (
                      <>
                        <li>
                          <Link className="dropdown-item text-white" to="/Profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                        <button
                          className="dropdown-item text-white"
                          onClick={() => {
                            auth.signOut();
                            toast.success('You have been logged out successfully!');
                          }}
                        >
                          Logout
                        </button>
                      </li>
                      </>
                    ) : (
                      <li>
                        <Link className="dropdown-item" to="/Auth">
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar