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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-white ">
      {/* Loader */}
      {showLoader ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="loader w-16 h-16 border-4 border-t-4 border-blue-300 rounded-full animate-spin"></div>
          <p className="text-white text-lg font-semibold">Processing...</p>
        </div>
      ) : (
      
      
        
          <div className="space-y-6">
            <img src="/assets/BB logo.png" alt="Binary Brains Logo" />
            <p >Congrats! You have successfully registered with Binary Brains.</p>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        
      )}
    </div>
  );
};

export default Dashboard;
