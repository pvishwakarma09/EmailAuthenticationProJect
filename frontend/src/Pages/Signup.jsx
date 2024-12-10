import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router for navigation.

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/send-otp", {
        email,
      });
      alert(response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      alert(error.response?.data?.message || "Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        email,
        otp,
      });
      alert(response.data.message);
      navigate("/dashboard"); // Redirect to a new page (e.g., Welcome page) after verification.
    } catch (error) {
      alert(error.response?.data?.message || "Error verifying OTP");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Section with Image */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 relative overflow-hidden">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-page-1886582-1598253.png" // Replace with the actual path to your image
          alt="Quote Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-10 text-white p-8">
          <p className="text-sm uppercase tracking-widest mb-2 text-2xl flex justify-center ">
            A wise quote
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Get Everything You Want
          </h1>
          <p className="text-lg">
            You can get anything you want if you work hard enough for it.
          </p>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-white p-8">
        <div className="w-full max-w-md space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your email to continue.
          </p>
          <form className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              disabled={isOtpSent} // Disable email input after OTP is sent
            />

            {/* OTP Input (Visible only after OTP is sent) */}
            {isOtpSent && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            )}

            {/* Button */}
            <button
              type="button"
              onClick={isOtpSent ? verifyOtp : sendOtp}
              className="w-full px-4 py-3 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              {isOtpSent ? "Verify OTP" : "Send OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
