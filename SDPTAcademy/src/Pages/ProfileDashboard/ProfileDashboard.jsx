import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import { auth } from '../../components/configs/firebase-config.js';
import './ProfileDashboard.css';


const ProfileDashboard = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
    <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect" />
    <section className='fixed-layout'>
    <div className="dashboard-container">
      <div className="container-fluid">
        <div className="row cards-container">
          {/* Profile Picture */}
          <div className='col col-md-4 col-sm-12'> 
            <div className="card card-design profile-card text-white text-center align-items-center justify-content-center">
              <div className="content pt-3"><h2>Profile Picture</h2></div>
              <img src={user?.photoURL || '/default-avatar.png'} alt="Profile" className="profile-picture mt-4 mb-4" />
              <p className='mt-2 mb-4'>JPG or PNG no longer than 5MB</p>
              <button className="btn btn-warning mb-5">Upload New Image</button>
            </div>

            {/* Change Password */}
            <div className="card card-design password-card text-white text-center align-items-center justify-content-center pb-5">
              <div className="content pt-3 mb-4"><h2>Change Password</h2></div>
              <div className='input-fields justify-content-center align-items-center'>
              <div className=" mb-md-3 px-3">
                <label className='form-label fw-semibold fs-5'>Current Password</label>
                <input type="password" className="form-control rounded-5 input-container text-white" />
              </div>
              <div className="mb-md-3 px-3">
                <label className='form-label fw-semibold fs-5'>New Password</label>
                <input type="password" className="form-control rounded-5 input-container text-white" />
              </div>
              <div className="mb-md-3 px-3">
                <label className='form-label fw-semibold fs-5'>Confirm Password</label>
                <input type="password" className="form-control rounded-5 input-container text-white" />
              </div>
              </div>
              <button className="btn btn-warning mt-3">Save Password</button>
            </div>
          </div>


          {/* Account Details */}
          <div className="col card card-design account-card text-white text-left align-items-center">
            <div className="content pt-3 mb-5 mt-5 ms-4"> <h2>Account Details</h2></div>
            <div className='input-fields justify-content-center align-items-center mt-5'>
            <div className="row px-3">
              <div className="col mb-md-3">
                <label className='form-label fw-semibold fs-5 mt-5'>First Name</label>
                <input type="text" className="form-control rounded-5 input-container text-white mb-4" placeholder="First Name" />
              </div>
              <div className="col mb-md-3">
                <label className='form-label fw-semibold fs-5 mt-5'>Last Name</label>
                <input type="text" className="form-control rounded-5 input-container text-white mb-4" placeholder="Last Name" />
              </div>
            </div>
            <div className="mb-md-3 px-3">
              <label className='form-label fw-semibold fs-5'>Email Address</label>
              <input type="email" className="form-control rounded-5 input-container text-white mb-4" placeholder={user?.email || 'N/A'} />
            </div>
            <div className="row px-3">
              <div className="col mb-md-3">
                <label className='form-label fw-semibold fs-5'>Phone Number</label>
                <input type="text" className="form-control rounded-5 input-container text-white mb-4" placeholder={user?.phoneNumber || 'N/A'} />
              </div>
              <div className="col mb-md-3">
                <label className='form-label fw-semibold fs-5'>Date of Birth</label>
                <input type="date" className="form-control rounded-5 input-container text-white mb-4" />
              </div>
            </div>
            </div>
            <div className='align-items-center justify-content-center'>
            <button className="btn btn-warning ms-4 px-5 py-2">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </>
);
}
export default ProfileDashboard;
