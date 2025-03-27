import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import { auth } from '../../components/configs/firebase-config.js';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import './ProfileDashboard.css';

import ProfileIcon from '../../assets/Account Icon.svg';

const ProfileDashboard = () => {
  const [user, setUser] = useState(null); 
  const [userData, setUserData] = useState({}); 

  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // Fetch user data from firestore
        const userDocRef = doc(db, 'Users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data()); 
        } else {
          console.log('No such document!');
        }
      }
    });

    return () => unsubscribe();
  }, [db]);

  // Handle input updates
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save prof updates to firestore
  const handleSaveChanges = async () => {
    if (user) {
      const userDocRef = doc(db, 'Users', user.uid);
      try {
        // Update firestore document
        await updateDoc(userDocRef, userData); 
        alert('Changes saved successfully!');
      } catch (error) {
        console.error('Error updating document:', error);
        alert('Failed to save changes.');
      }
    }
  };

  return (
    <>
      <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect" />
      <section className="fixed-layout">
        <div className="dashboard-container">
          <div className="container-fluid">
            <div className="row cards-container">
              {/* Profile Picture */}
              <div className="col col-md-4 col-sm-12">
                <div className="card card-design profile-card text-white text-center align-items-center justify-content-center">
                  <div className="content pt-3 text-warning">
                    <h2 className="fw-bold">Profile Picture</h2>
                  </div>
                  <img
                    src={user?.photoURL || ProfileIcon}
                    alt="Profile"
                    className="profile-picture mt-4 mb-4"
                  />
                  <p className="mt-2 mb-4">JPG or PNG no longer than 5MB</p>
                  <button className="btn btn-warning mb-5">Upload New Image</button>
                </div>

                {/* Change Password */}
                <div className="card card-design password-card text-white text-center align-items-center justify-content-center pb-5">
                  <div className="content pt-3 mb-4 text-warning">
                    <h2 className="fw-bold">Change Password</h2>
                  </div>
                  <div className="input-fields justify-content-center align-items-center">
                    <div className="mb-md-3 px-3">
                      <label className="form-label fw-semibold fs-5">Current Password</label>
                      <input
                        type="password"
                        className="form-control rounded-5 input-container text-white"
                      />
                    </div>
                    <div className="mb-md-3 px-3">
                      <label className="form-label fw-semibold fs-5">New Password</label>
                      <input
                        type="password"
                        className="form-control rounded-5 input-container text-white"
                      />
                    </div>
                    <div className="mb-md-3 px-3">
                      <label className="form-label fw-semibold fs-5">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control rounded-5 input-container text-white"
                      />
                    </div>
                  </div>
                  <button className="btn btn-warning mt-3">Save Password</button>
                </div>
              </div>

              {/* Account Details */}
              <div className="col card card-design account-card text-white text-left align-items-center">
                <div className="content pt-3 mt-5 text-warning">
                  <h2 className="fw-bold">Account Details</h2>
                </div>
                <div className="input-fields justify-content-center align-items-center mt-5">
                  <div className="row px-3">
                    <div className="col mb-md-3">
                      <label className="form-label fw-semibold fs-5 mt-5">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control rounded-5 input-container text-white mb-4"
                        placeholder="First Name"
                        value={userData.firstName || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col mb-md-3">
                      <label className="form-label fw-semibold fs-5 mt-5">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control rounded-5 input-container text-white mb-4"
                        placeholder="Last Name"
                        value={userData.lastName || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-md-3 px-3">
                    <label className="form-label fw-semibold fs-5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-5 input-container text-white mb-4"
                      placeholder="Email Address"
                      value={userData.email || ''}
                      readOnly
                    />
                  </div>
                  <div className="row px-3">
                    <div className="col mb-md-3">
                      <label className="form-label fw-semibold fs-5">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control rounded-5 input-container text-white mb-4"
                        placeholder="Phone Number"
                        value={userData.phone || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col mb-md-3">
                      <label className="form-label fw-semibold fs-5">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        className="form-control rounded-5 input-container text-white mb-4"
                        value={userData.dob || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="align-items-center justify-content-center">
                  <button
                    className="btn btn-warning ms-4 px-5 py-2 mb-4 mt-3"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDashboard;
