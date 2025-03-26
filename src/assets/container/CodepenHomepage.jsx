import React, { useState, useEffect } from 'react';
import { HiChevronDoubleLeft, HiChevronLeft } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import { FaSearchengin, FaGoogle, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

// Mock components (you would replace these with your actual components)
const UserProfileDetails = () => (
  <div className="flex items-center gap-2">
    <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full" />
    <span className="text-white text-sm">Username</span>
  </div>
);

const Spinner = () => (
  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
);

const CodepenHomepage = () => {
  const [isSlideMenu, setIsSlideMenu] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle signup button click
  const handleSignupClick = () => {
    navigate('/home/auth');
  };

  if (showSpinner) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <Spinner />
      </div>
    );
  }

  // Function to render placeholder icons for the feature grid
  const renderPlaceholderIcon = (color = "green") => (
    <div className={`h-12 w-12 rounded-md bg-${color}-500 flex items-center justify-center text-white font-bold`}>
      <span>●</span>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center">
          {/* Logo Box */}
          <div className="h-8 w-24 bg-gray-700 rounded flex items-center justify-center mr-4">
            <span className="text-xs">CodePen</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/newProject" className="text-sm hover:text-green-400">Start Coding</Link>
            <a href="#" className="text-sm hover:text-green-400">Search Pens</a>
            <a href="#" className="text-sm hover:text-green-400">Challenges</a>
            <a href="#" className="text-sm hover:text-green-400">Spark</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsSlideMenu(!isSlideMenu)}>
              <HiChevronDoubleLeft className="text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        {isSlideMenu && (
          <div className="absolute top-0 left-0 w-full bg-gray-800 p-4">
            <Link to="/newProject" className="block text-sm hover:text-green-400">Start Coding</Link>
            <a href="#" className="block text-sm hover:text-green-400">Search Pens</a>
            <a href="#" className="block text-sm hover:text-green-400">Challenges</a>
            <a href="#" className="block text-sm hover:text-green-400">Spark</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative py-16 px-4 md:px-8 border-b border-gray-700">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The best place to build, test, and discover front-end code.
          </h1>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.
          </p>
          <button 
            className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600"
            onClick={handleSignupClick}
          >
            Sign Up for Free
          </button>
        </div>
        
        {/* Replaced decorative code pattern with a small box */}
        <div className="absolute right-0 bottom-0 w-16 h-16 bg-green-500 opacity-40 rounded"></div>
      </div>
      
      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-6 p-8 border-b border-gray-700">
        {/* Build & Test */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-4">
            {/* Small placeholder box instead of image */}
            <div className="h-12 w-12 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
              <span>B</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Build & Test</h2>
          <p className="text-gray-400 mb-4">
            Get more from dev testing by seeing how code works in production or tweaking a bug fix in real time.
          </p>
          <a href="#" className="text-green-400 hover:underline text-sm font-medium">Try Pro for Free</a>
        </div>
        
        {/* Learn & Discover */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-4">
            {/* Small placeholder box instead of image */}
            <div className="h-12 w-12 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
              <span>L</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Learn & Discover</h2>
          <p className="text-gray-400 mb-4">
            Want to upgrade your skills? Participating in CodePen challenges is a great way of learning by doing.
          </p>
          <a href="#" className="text-green-400 hover:underline text-sm font-medium">Join This Week's Challenge</a>
        </div>
        
        {/* Share Your Work */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-4">
            {/* Small placeholder box instead of image */}
            <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
              <span>S</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Share Your Work</h2>
          <p className="text-gray-400 mb-4">
            Become part of the most active front-end community by sharing what you've made and getting feedback.
          </p>
          <a href="#" className="text-green-400 hover:underline text-sm font-medium">Explore Trending</a>
        </div>
      </div>
      
      {/* Inspiration Section */}
      <div className="p-8 border-b border-gray-700">
        <h2 className="text-2xl font-bold mb-6">
          Find inspiration from 1.8 million+ front-end designers and developers.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Sample Projects - replaced empty divs with compact boxes */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-700 flex items-center justify-center">
              <div className="w-16 h-16 bg-green-800 rounded"></div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Fluid portfolio navigation animation</h3>
              <div className="text-xs text-gray-400 mt-2">PRO PICK</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-700 flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-800 rounded"></div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Bookmark ICON</h3>
              <div className="text-xs text-gray-400 mt-2">PRO PICK</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-700 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-800 rounded"></div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Text effects vs text-stroke experiments</h3>
              <div className="text-xs text-gray-400 mt-2">PRO PICK</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="border border-gray-600 px-6 py-2 rounded-md hover:border-gray-400">
            Next →
          </button>
        </div>
      </div>
      
      {/* Environment Section */}
      <div className="py-12 px-8 text-center border-b border-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          A front-end environment made for testing and sharing
        </h2>
        <a href="#" className="text-green-400 hover:underline">LEARN MORE</a>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="text-left space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">→</span>
              <h3 className="font-bold">Support For The Way You Code</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-400">→</span>
              <h3 className="font-bold">Keep Your Pens Private</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-400">→</span>
              <h3 className="font-bold">Embed Pens</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-400">→</span>
              <h3 className="font-bold">Asset Hosting</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-400">→</span>
              <h3 className="font-bold">Build Entire Projects</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-400">→</span>
              <h3 className="font-bold">CodePen Mode</h3>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <div className="w-32 h-32 bg-gray-700 rounded flex items-center justify-center">
              <div className="w-16 h-16 bg-green-700 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="bg-gray-800 text-center py-8 border-t border-gray-700">
        <div className="text-gray-400 mb-4">
          <a href="#" className="mr-4 hover:text-green-400">Terms of Service</a>
          <a href="#" className="mr-4 hover:text-green-400">Privacy Policy</a>
          <a href="#" className="mr-4 hover:text-green-400">Community Guidelines</a>
        </div>
        <div className="text-gray-400">
          <p>&copy; 2025 CodePen, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CodepenHomepage;
