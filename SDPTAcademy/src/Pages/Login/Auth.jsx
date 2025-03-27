import React, { useMemo, useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import SDPTLogo from '../../assets/SDPT Logo.svg'
import './auth.css'
import { auth, db, googleAuthProvider } from '../../components/configs/firebase-config'
import { createUserWithEmailAndPassword, 
    signOut, sendEmailVerification, 
    sendPasswordResetEmail, 
    signInWithPhoneNumber,
    confirmPasswordReset,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    } from 'firebase/auth'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore'
import OtpIcon from '../../assets/OtpIcon.svg'
import { toast, Toaster } from 'react-hot-toast'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import OtpInput from 'react-otp-input';
import { RecaptchaVerifier, onAuthStateChanged } from "firebase/auth";


const Auth = () => {

    const navigate = useNavigate();
    //Getting and Setting login credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [disableSend, setDisableSend] = useState(false); 
    const [isVerified, setIsVerified] = useState(false);
    const [isRegistered, setIsRegistered] = useState(true);


    //This is for switching gui between Login GUI and Sign Up GUI
    const handleChange = () =>{
        setIsRegistered(!isRegistered);
    }


    const onCaptchVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                size: "normal",
                callback: (response) => {
                console.log("reCAPTCHA verified!", response);
                },
                "expired-callback": () => {
                console.error("reCAPTCHA expired. Please refresh and try again.");
                },
            });
            }
    };

    const onSignup = async () => {
        if (disableSend) return; // Prevent multiple clicks
        setDisableSend(true);
    

        try {
            onCaptchVerify();
            const appVerifier = window.recaptchaVerifier;
            const formatPh = "+" + phone;

            console.log("Sending OTP to:", formatPh);

            const confirmationResult = await signInWithPhoneNumber(auth, formatPh, appVerifier);
            window.confirmationResult = confirmationResult;

            console.log("OTP sent successfully!");

            setShowOTP(true);
            toast.success("OTP sent successfully!");
        } catch (error) {
            console.error("Error during phone authentication:", error);
        }finally {
            setTimeout(() => setDisableSend(false), 10000); // Re-enable after 5 seconds
        }
    }
    
    //for handling OTP Verification
    const onOTPVerify = () => {
        window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
            setIsVerified(true);
            console.log("OTP verified successfully:", res);
            toast.success("Verified Successfully")
            setShowOTP(false);
        })
        .catch((err) => {
            console.error("Failed to verify OTP:", err);
        });
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

            if(!isVerified){
                toast.error("Please verify your account nigga")
                return;
            }

            await createUserWithEmailAndPassword(auth,email,password,phone);
            const user = auth.currentUser

            if(user){
                await setDoc(doc(db, "Users", user.uid),{
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                });
            }
            alert("User Registered Successfully!");
            //handleChange(); not tested yet xD

        }catch(error){
            console.log(error.message);
       }
    }
    

    //For handling user login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          toast.success('Successfully logged in!');
          console.log('Successfully logged in:', email);
          navigate('/'); 
        } catch (error) {
          console.error('Login error:', error.message);
          toast.error('Invalid Email or Password');
        }
      };

    //For handling google login
    const handleGoogleSignIn = async (e) =>{
        e.preventDefault();
        try{
            await signInWithPopup(auth, googleAuthProvider)
            toast.success('Successfully logged in with Google!');
            navigate('/'); 
        }catch(error){
            console.log(error.message);
            toast.error('Google Sign-In failed');
        }
    }

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-white">
        <Toaster toastOptions={{ duration: 4000 }} />
        <form className='p-3 container login-container bg-dark rounded-4'>
            <legend className='text-center'>
                <img src={SDPTLogo} alt="" className="img-fluid" />
                <h3 className="fw-bold d-inline mx-2">SDPT <span className='lead fs-3'>Academy</span></h3>
            </legend>
            {showOTP ? (
                <>
                    <div className="d-flex flex-column align-items-center justify-content-center p-5">
                        <div className="d-flex justify-content-center mb-3">
                        <img src={OtpIcon} className='img-fluid pe-2' alt="" />
                        </div>
                        <h5 className="text-center text-white mb-3">Enter One-Time Password</h5>
                        <p className="text-center text-white-50 mb-3">
                        A one-time password has been sent to ****-***-****
                        </p>

                        <div className="mb-3 d-flex flex-column justify-content-center align-items-center">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} className="input-container rounded-4 mx-1 text-white input-otp-size" />}
                            containerStyle="d-flex justify-content-center align-items-center"
                        />
                        <button type="button" className="btn btn-warning w-100 mt-3" onClick={onOTPVerify}>
                            Verify
                        </button>
                        </div>

                        <div className="text-center mt-3">
                        <p className="text-white-50">
                            Didn't receive a code? <a href="#" className="text-warning">Try again</a>
                        </p>
                        </div>
                    </div>
                </>) 
                
                : 
                
                (
                <>
                    {!isRegistered &&
                    <>
                    <div className="my-md-3 px-3">
                        <label htmlFor="firstName" className='form-label fw-semibold fs-5'>First Name</label>
                        <input type="text" className="form-control rounded-5 input-container text-white" id ="firstName"
                        onChange={(e)=> setFirstName(e.target.value)}/>
                    </div>

                    <div className="my-md-3 px-3">
                        <label htmlFor="lastName" className='form-label fw-semibold fs-5'>Last Name</label>
                        <input type="text" className="form-control rounded-5 input-container text-white" id ="lastName"
                        onChange={(e)=> setLastName(e.target.value)}/>
                    </div>
                    </>
                    }

                    <div className="mb-md-3 px-3">
                        <label htmlFor="userEmail" className='form-label fw-semibold fs-5'>Email</label>
                        <input type="email" className="form-control rounded-5 input-container text-white" id ="userEmail"
                        onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-md-3 px-3">
                        <label htmlFor="userPassword" className='form-label fw-semibold fs-5'>Password</label>
                        <input type="password" className="form-control rounded-5 input-container text-white" id ="userPassword"
                        onChange={(e)=> setPassword(e.target.value)}/>
                    </div>

                    {!isRegistered &&
                    <div className="mb-md-3 px-3">
                        <label htmlFor="userConfirmPassword" className='form-label fw-semibold fs-5'>Confirm Password</label>
                        <input type="password" className="form-control rounded-5 input-container text-white" id ="userConfirmPassword"
                        onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </div>
                    }

                    {!isRegistered &&
                    <div className="mb-md-3 px-3">
                        <label htmlFor="userPhone" className='form-label fw-semibold fs-5'>Mobile Number</label>
                        <div className="d-flex align-items-center justify-content-center mb-2 placeholder-glow">
                            <PhoneInput
                                country={"ph"}
                                value={phone}
                                onChange={setPhone}
                                inputClass='input-container text-white rounded-5 w-100'
                                buttonClass='rounded-5 input-container border-0 m-1'
                                disableDropdown
                            />
                            <button type="button" className="btn bg-warning ms-2 w-25 text-white rounded-5" onClick={onSignup}>Verify</button>
                        </div>
                        <div id="recaptcha-container"></div>
                    </div>
                    }

                    {isRegistered &&
                    <div className="text-center">
                        
                        <button type="button" className="btnLogin w-100 btn btn-warning btn-md mt-3 rounded-5 text-white" onClick={handleLogin}>LOGIN</button>
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
                    
                </>
                )}
        </form>

        
    </div>
  )
}

export default Auth

export function useAuth() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => unsubscribe();
    }, []);
  
    return user;
  }