import React, { useState } from 'react'
import SDPTLogo from '../../assets/SDPT Logo.svg'
import './login.css'
import { auth } from '../configs/firebase'
import { createUserWithEmailAndPassword, } from 'firebase/auth'



const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true);

    const handleChange = () =>{
        setIsRegistered(!isRegistered);
    }

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-white">
        <form className='p-3 container login-container bg-dark rounded-4'>

            <legend className='text-center'>
                <img src={SDPTLogo} alt="" className="img-fluid" />
                <h3 className="fw-bold d-inline mx-2">SDPT <span className='lead fs-3'>Academy</span></h3>
            </legend>
            {!isRegistered && 
                    <div className="my-3">
                 <label htmlFor="userName" className='form-label fw-semibold fs-5'>Username</label>
                <input type="text" className="form-control rounded-5" id ="userName"/>
            </div>
            }
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

            {!isRegistered &&
            <div className="mb-3">
                <label htmlFor="userConfirmPassword" className='form-label fw-semibold fs-5'>Confirm Password</label>
                <input type="password" className="form-control rounded-5" id ="userConfirmPassword"/>
            </div>
            }

            <div className="text-center">
                <button className="btnLogin w-100 btn btn-warning btn-md mt-3 rounded-5 text-white" onClick={""}>LOGIN</button>
            </div>

            <div className="text-center mt-3">
                {isRegistered && 
                    <p className="lead text-secondary">Don't have an account?<span className='fsw-medium text-white mx-1' role='button' onClick={handleChange}>Sign up</span></p>                
                }
                {!isRegistered &&
                    <p className="lead text-secondary">Already have an account?<span className='fsw-medium text-white mx-1' role='button' onClick={handleChange}>Sign in</span></p>                
                }
            </div>
        </form>
    </div>
  )
}

export default Login