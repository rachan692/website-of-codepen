import React, { useState, useEffect } from 'react';
import { FaSearchengin, FaGoogle, FaGithub } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import UserProfileDetails from '../components/UserProfileDetails'; // Assuming you have this component
import { signInWithGithub, signInWithGoogle } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import UserAuthInput from '../components/UserAuthInput';
import { FaEnvelope } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import Spinner from '../components/Spinner'; // Import the Spinner

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Track whether it's login or signup form
  const [showSpinner, setShowSpinner] = useState(true); // State for showing spinner

  useEffect(() => {
    // Set the spinner to show for 5 seconds
    const timer = setTimeout(() => {
      setShowSpinner(false); // Hide spinner after 5 seconds
    }, 5000);

    // Clear timeout if component unmounts before timer completes
    return () => clearTimeout(timer);
  }, []);

  const handleAuth = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }
    setLoading(true);
    // Simulate the authentication process (can be replaced with Firebase or other logic)
    setTimeout(() => {
      setLoading(false);
      console.log(isLogin ? 'User logged in' : 'User signed up with:', email, password);
      setError(''); // Clear error if signup/login is successful
    }, 2000);
  };

  if (showSpinner) {
    return (
      // Full page loading spinner
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <Spinner /> {/* Spinner component */}
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-48 min-h-screen max-h-screen relative bg-secondary px-3 py-4 flex flex-col items-start justify-start gap-6">
        {/* Logo */}
        <Link to={'/home'} className="absolute top-4 left-4">
          <img
            src='data:image/png;base64,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' // Ensure the path is correct in the public directory
            alt="Logo"
            className="object-contain w-16 h-16 bg-transparent" // Adjusted size of the logo
          />
        </Link>

        {/* Start Coding Button */}
        <Link to={'/newProject'}>
          <div
            className="p-2 flex items-center justify-center rounded-xl
              border overflow-hidden border-gray-400 text-white cursor-pointer hover:border-gray-200 
              mt-20 w-full"
          >
            <p className="text-lg">Start Coding</p>
          </div>
        </Link>

        {/* Home nav link */}
        <Link to="/home/projects" className="flex items-center justify-center gap-4">
          <MdHome className="text-white text-xl" />
          <p className="text-lg text-primarytext text-white">Home</p>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll">
        {/* Search engine and UserProfileDetails - positioned at the top */}
        <div className="w-[950px] p-4 shadow-md flex items-center justify-between">
          {/* Search engine */}
          <div className="flex items-center gap-4 border border-gray-300 rounded-xl w-full px-4 py-2 bg-secondary">
            {/* Search Icon */}
            <FaSearchengin className="text-3xl text-primarytext" />

            {/* Input Field */}
            <input
              type="text"
              className="flex-1 px-4 py-2 text-xl bg-transparent outline-none text-primarytext placeholder:text-gray-600"
              placeholder="Search here ..."
            />
          </div>

          {/* Sign Up Button near the search engine */}
          <button
            onClick={() => {}}
            className="bg-green-500 text-white px-6 py-1 ml-2 rounded-md text-sm font-medium shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* Signup Form */}
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div className="text-center mb-6">
              <p className="text-2xl text-white font-medium">
                {isLogin ? 'Log in to your account' : 'Join with us'} 🤝
              </p>
            </div>

            <form onSubmit={handleAuth} className="flex flex-col gap-6">
              {/* Email Input */}
              <UserAuthInput
                label="EMAIL"
                placeholder="Email"
                isPass={false}
                setStateFunction={setEmail}
                Icon={<FaEnvelope className="text-gray-400 text-lg" />}
              />

              {/* Password Input */}
              <UserAuthInput
                label="PASSWORD"
                placeholder="********"
                isPass={true}
                setStateFunction={setPassword}
                Icon={<MdPassword className="text-gray-400 text-lg" />}
              />

              {/* Error Alert */}
              {error && <div className="text-red-500 text-sm">{error}</div>}

              {/* Auth Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium mt-2 transition duration-300"
                disabled={loading}
              >
                {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : isLogin ? 'Log In' : 'Sign Up'}
              </button>

              {/* Account Text Section */}
              <div className="text-center text-gray-400 text-sm">
                <span>{isLogin ? "Don't have an account? " : 'Already have an account? '}</span>
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-400 hover:underline"
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </div>

              {/* Or Section */}
              <div className="flex items-center justify-center mt-4">
                <span className="border-t border-gray-700 w-full"></span>
                <span className="px-2 text-gray-500 text-sm">OR</span>
                <span className="border-t border-gray-700 w-full"></span>
              </div>

              {/* Social sign-ins */}
              <button
                onClick={signInWithGoogle}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-3 rounded-md font-medium mt-4"
              >
                <FaGoogle /> Sign in with Google
              </button>

              <button
                onClick={signInWithGithub}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white py-3 rounded-md font-medium mt-4"
              >
                <FaGithub /> Sign in with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
