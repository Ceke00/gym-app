import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or user data if stored (optional)
    // Example: localStorage.clear(); or sessionStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome to Your User Page!</h1>
      <p>
        You have successfully logged in. This is your personalized space to access exclusive
        content, manage your profile, and explore features tailored just for you. 
        Start by navigating through our various sections to discover what's available. 
        Your journey begins here. Enjoy your membership!
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
