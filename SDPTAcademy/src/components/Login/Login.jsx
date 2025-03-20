import React, { useState } from 'react'
import SDPTLogo from '../../assets/SDPT Logo.svg'
import './login.css'


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleChange = () =>{
        setIsLogin(!isLogin);
    }

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-white">
        <form className='p-3 container login-container bg-dark rounded-4'>
            <legend className='text-center'>
                <img src={SDPTLogo} alt="" className="img-fluid" />
                <h3 className="fw-bold d-inline mx-2">SDPT <span className='lead fs-3'>Academy</span></h3>
            </legend>
            <div className="my-3">
                <label htmlFor="userName" className='form-label fw-semibold fs-5'>Username</label>
                <input type="text" className="form-control rounded-5" id ="userName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="userEmail" className='form-label fw-semibold fs-5'>Email</label>
                <input type="email" className="form-control rounded-5" id ="userEmail"/>
            </div>
            <div className="mb-3">
                <label htmlFor="userPassword" className='form-label fw-semibold fs-5'>Password</label>
                <input type="password" className="form-control rounded-5" id ="userPassword"/>
            </div>

            <div className="text-center">
                <button className="btnLogin w-100 btn btn-warning btn-md mt-3 rounded-5 text-white">LOGIN</button>
            </div>
        </form>
    </div>
  )
}

export default Login