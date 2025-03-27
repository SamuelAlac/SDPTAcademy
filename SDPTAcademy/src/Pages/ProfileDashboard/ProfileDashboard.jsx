import React from 'react'
import Navbar from '../../components/Header/Navbar'
import './ProfileDashboard.css'



const ProfileDashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="dashboard-container ">
      <div className="container-fluid ">
        <div className="row cards-container">
          <div className='col col-md-4 col-sm-12'>
          <div className=" profile-card">
            <div className="content">Profile Picture</div>
          </div>
          <div className="password-card">
            <div className="content">Change Password</div>
          </div>
          </div>    
          <div className="col account-card">
            <div className="content">Account Details</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileDashboard