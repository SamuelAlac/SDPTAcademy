import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../components/configs/firebase-config";
import { toast } from "react-hot-toast";

const PhoneAuth = ({ phone, onVerifySuccess }) => {
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Initialize Recaptcha Only Once
    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: () => sendOtp(),
                    "expired-callback": () => toast.error("Recaptcha expired, please try again.")
                },
                auth
            );
        }
    };

    const sendOtp = () => {
        if (!phone) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        setLoading(true);
        setupRecaptcha();

        const appVerifier = window.recaptchaVerifier;
        const formattedPhone = phone.startsWith("+") ? phone : `+63${phone}`;

        signInWithPhoneNumber(auth, formattedPhone, appVerifier)
            .then((result) => {
                setConfirmationResult(result);
                toast.success("OTP sent successfully.");
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to send OTP. Please try again.");
                setLoading(false);
            });
    };

    const verifyOtp = () => {
        if (!otp || !confirmationResult) {
            toast.error("Please enter the OTP.");
            return;
        }

        confirmationResult
            .confirm(otp)
            .then(() => {
                toast.success("Phone number verified!");
                onVerifySuccess(); // Call parent component function
            })
            .catch((error) => {
                toast.error("Invalid OTP. Please try again.");
                console.error(error);
            });
    };

    return (
        <div>
            <div id="recaptcha-container"></div>

            {!confirmationResult ? (
                <button onClick={sendOtp} disabled={loading} className="btn btn-primary">
                    {loading ? "Sending OTP..." : "Send OTP"}
                </button>
            ) : (
                <div>
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={verifyOtp} className="btn btn-success mt-2">
                        Verify OTP
                    </button>
                </div>
            )}
        </div>
    );
};

export default PhoneAuth;
