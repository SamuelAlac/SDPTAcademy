import React, { useMemo, useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import SDPTLogo from '../../assets/SDPT Logo.svg'
import './auth.css'
import { auth, db, googleAuthProvider } from '../../components/configs/firebase-config'
import { createUserWithEmailAndPassword, 
    signOut, sendEmailVerification, 
    sendPasswordResetEmail, 
    RecaptchaVerifier,
    signInWithPhoneNumber,
    confirmPasswordReset,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    } from 'firebase/auth'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore'

const Auth = () => {


    //Getting and Setting login credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //This is for switching gui between Login GUI and Sign Up GUI
    const [isRegistered, setIsRegistered] = useState(true);


    
    const handleChange = () =>{
        setIsRegistered(!isRegistered);
    }

    //For handling user registration
    const handleRegistration = async(e) =>{
        e.preventDefault();

        try{

            if(!firstName || !lastName || !email || !password || !confirmPassword){
                alert("Please input all required field");
                return;
            }
    
            if(confirmPassword !== password){
                alert("Password Do not match");
                return;
            }

            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser

            if(user){
                await setDoc(doc(db, "Users", user.uid),{
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                });
            }
            alert("User Registered Successfully!");
            //handleChange(); not tested yet xD

        }catch(error){
            console.log(error.message);
       }
    }

    //For handling user login
    //WIP
    const handleLogin = async () =>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
            alert("Successfully login")
        }catch(error){
            console.log(error.message)
        }

        // const navigate = useNavigate();
        // navigate(<PhoneAuth/>);
    }

    //For handling google login
    const handleGoogleSignIn = async () =>{
        try{
            await signInWithPopup(auth, googleAuthProvider)
        }catch(error){
            console.log(error.message);
        }
    }


  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-white">
        <form className='p-3 container login-container bg-dark rounded-4'>

            <legend className='text-center'>
                <img src={SDPTLogo} alt="" className="img-fluid" />
                <h3 className="fw-bold d-inline mx-2">SDPT <span className='lead fs-3'>Academy</span></h3>
            </legend>
            {!isRegistered &&
            <>
            <div className="my-md-3 px-3">
                <label htmlFor="firstName" className='form-label fw-semibold fs-5'>First Name</label>
                <input type="text" className="form-control rounded-5" id ="firstName"
                onChange={(e)=> setFirstName(e.target.value)}/>
            </div>

            <div className="my-md-3 px-3">
                <label htmlFor="lastName" className='form-label fw-semibold fs-5'>Last Name</label>
                <input type="text" className="form-control rounded-5" id ="lastName"
                onChange={(e)=> setLastName(e.target.value)}/>
            </div>
            </>
            }

            <div className="mb-md-3 px-3">
                <label htmlFor="userEmail" className='form-label fw-semibold fs-5'>Email</label>
                <input type="email" className="form-control rounded-5" id ="userEmail"
                onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="mb-md-3 px-3">
                <label htmlFor="userPassword" className='form-label fw-semibold fs-5'>Password</label>
                <input type="password" className="form-control rounded-5" id ="userPassword"
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            {!isRegistered &&
            <div className="mb-md-3 px-3">
                <label htmlFor="userConfirmPassword" className='form-label fw-semibold fs-5'>Confirm Password</label>
                <input type="password" className="form-control rounded-5" id ="userConfirmPassword"
                onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
            }

            {isRegistered &&
            <div className="text-center">
                <button className="btnLogin w-100 btn btn-warning btn-md mt-3 rounded-5 text-white" onClick={handleLogin}>LOGIN</button>
            </div>
            }

            {!isRegistered &&
            <div className="text-center">
                <button className="btnLogin w-100 btn btn-warning btn-md mt-3 rounded-5 text-white" onClick={handleRegistration}>SIGN UP</button>
            </div>
            }

            <div className="text-center mt-md-2">
                {isRegistered && 
                    <p className="lead text-secondary">Don't have an account?<span className='fsw-medium text-white mx-1 text-nowrap' role='button' onClick={handleChange}>Sign up</span></p>                
                }
                {!isRegistered &&
                    <p className="lead text-secondary">Already have an account?<span className='fsw-medium text-white mx-1 text-nowrap' role='button' onClick={handleChange}>Sign in</span></p>                
                }
            </div>

            <h1 className="lead fw-bold text-center" role='button' onClick={handleGoogleSignIn}><i class="bi bi-google text"></i></h1>
        </form>

        
    </div>
  )
}

export default Auth


const PhoneAuth = () => {
  return (
    <div className='container vh-100 d-flex align-items-center justify-content-center text-white'>
        <form className='p-3 container login-container bg-dark rounded-4'>
            <legend className='text-center'>
                <img src={SDPTLogo} alt="" className="img-fluid" />
                <h3 className="fw-bold d-inline mx-2">SDPT <span className='lead fs-3'>Academy</span></h3>
            </legend>
        </form>
    </div>
  )
}
