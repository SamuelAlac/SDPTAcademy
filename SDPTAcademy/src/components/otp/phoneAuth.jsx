import React, {useState} from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../components/configs/firebase-config";


const PhoneAuth = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [message, setMessage] = useState("");

    const setupRecaptcha = () => {
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'normal',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                },
                'expired-callback': () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                }
        }, auth);
        }
    }

};

export default PhoneAuth;