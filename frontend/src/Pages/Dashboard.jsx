import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import { useState, useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [showLoader, setShowLoader] = useState(false);

  const handleLogout = () => {
    // Show loader for a better UX during logout
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false); // Hide loader after a delay
      navigate("/login"); // Redirect to the login page
    }, 1500);
  };

  useEffect(() => {
    // Simulate a brief loading state when the dashboard first loads
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 1000);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Loader */}
      {showLoader ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="loader w-16 h-16 border-4 border-t-4 border-blue-300 rounded-full animate-spin"></div>
          <p className="text-white text-lg font-semibold">Processing...</p>
        </div>
      ) : (
        <div className="text-center text-white p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-xl w-full max-w-lg">
          <h1 className="text-5xl font-bold mb-6 animate-slideInUp">Dashboard</h1>
          <p className="text-lg mb-6">Welcome! Your email has been successfully verified.</p>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-lg shadow-inner">
              <p className="text-xl font-medium">Your Current Status</p>
              <ul className="text-left list-disc mt-4 ml-6 space-y-2">
                <li>You’ve logged in successfully.</li>
                <li>Email verified at {new Date().toLocaleTimeString()}.</li>
                <li>Your account is fully active.</li>
              </ul>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 text-lg font-semibold rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
