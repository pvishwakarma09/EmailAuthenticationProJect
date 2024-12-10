import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    alert("Login successful!");
    window.location.href = "/dashboard"; // Redirect after login
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Section with Image */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 relative overflow-hidden">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-1886583-1598255.png" // Replace with an appropriate image
          alt="Login Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-10 text-white p-8">
          <p className="text-sm uppercase tracking-widest mb-2">A wise quote</p>
          <h1 className="text-5xl font-bold leading-tight mb-4">Welcome Back</h1>
          <p className="text-lg">
            Log in to access your personalized dashboard and explore more features.
          </p>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-white p-8">
        <div className="w-full max-w-md space-y-6 animate-slideUp">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Log In</h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your credentials to access your account.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
