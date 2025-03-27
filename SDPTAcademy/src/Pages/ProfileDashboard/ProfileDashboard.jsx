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
    <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect"/>
    <section className='fixed-layout'>
    <div className="dashboard-container ">
      <div className="container-fluid ">
        <div className="row cards-container">
          <div className='col col-md-4 col-sm-12'>
          <div className="card card-design profile-card text-white text-center">
            <div className="content pt-3">Profile Picture</div>
          </div>
          <div className="card card-design password-card text-white text-center">
            <div className="content pt-3">Change Password</div>
          </div>
          </div>    
          <div className="col card card-design account-card text-white text-center">
            <div className="content pt-3">Account Details</div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}
export default ProfileDashboard;
