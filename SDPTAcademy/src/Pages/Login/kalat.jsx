import React, { useState } from 'react';
import { auth } from '../../components/configs/firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const Auth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => onSignup(),
      });
    }
  };

  const onSignup = async () => {
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formattedPhone = "+" + phone;

    try {
      const result = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(result);
      setShowOTP(true);
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const onOTPVerify = async () => {
    if (!confirmationResult) {
      toast.error("Request OTP first");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      toast.success("OTP verified successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-white">
      <Toaster />
      <div className='p-3 container login-container bg-dark rounded-4'>
        <h3 className="fw-bold text-center">OTP Authentication</h3>
        <div className="mb-3">
          <PhoneInput
            country={'ph'}
            value={phone}
            onChange={setPhone}
            inputClass="form-control"
          />
          <button type="button" className="btn btn-warning w-100 mt-2" onClick={onSignup}>Verify</button>
        </div>
        {showOTP && (
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="button" className="btn btn-success w-100 mt-2" onClick={onOTPVerify}>Submit OTP</button>
          </div>
        )}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default Auth;