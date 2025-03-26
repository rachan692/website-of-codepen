import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from './assets/container/CodepenHomepage'; // Projects page
import Signup from './assets/container/Signup'; // Signup page
import NewProject from "./assets/container/NewProject";

const App = () => {
  const navigate = useNavigate();

  // This effect ensures the CodePen homepage is displayed when the site first loads
  useEffect(() => {
    // Check if we're on the root path and redirect to /home/projects to show the homepage
    if (window.location.pathname === '/') {
      navigate('/home/projects');
    }
  }, [navigate]);

  return (
    <Routes>
      {/* Redirect root path to display the homepage */}
      <Route path="/" element={<Navigate to="/home/projects" />} />
      
      {/* Homepage route */}
      <Route path="/home/projects" element={<Home />} />
      
      {/* NewProject route */}
      <Route path="/newProject" element={<NewProject />} />
      
      {/* Signup route */}
      <Route path="/home/auth" element={<Signup />} />
      
      {/* Route to handle direct home path to ensure proper navigation */}
      <Route path="/home" element={<Navigate to="/home/projects" />} />
      
      {/* Redirect to homepage if the route doesn't exist */}
      <Route path="*" element={<Navigate to="/home/projects" />} />
    </Routes>
  );
};

export default App;