import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaChevronDown } from 'react-icons/fa'; // Chevron icon for dropdown
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const UserProfileDetails = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const Menu = [
    { id: 1, name: 'Projects', url: '/home/projects' },
    { id: 2, name: 'Collections', url: '/home/collections' },
    { id: 3, name: 'Profile', url: '/home/profile' },
  ];

  const handleSignOut = () => {
    console.log("Sign-out initiated...");

    // Perform sign-out and navigate to the Signup page
    navigate('/home/auth');
  };

  return (
    <div className='flex items-center justify-center relative'>
      {/* Small Square Profile Picture */}
      <div className='w-14 h-14 flex items-center justify-center overflow-hidden cursor-pointer bg-emerald-500
       rounded-xl ml-1'>
        <span className='text-white text-xl font-semibold'>U</span>
      </div>

      {/* Dropdown trigger */}
      <motion.div
        className='ml-2 cursor-pointer'
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaChevronDown className='text-white' />
      </motion.div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <motion.div
          className='bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Menu.map(menuItem => (
            <Link
              to={menuItem.url}
              key={menuItem.id}
              className='text-white text-lg hover:text-emerald-500'
              onClick={() => setMenuOpen(false)} // Close the menu when clicked
            >
              {menuItem.name}
            </Link>
          ))}

          {/* Sign Out Option inside the dropdown */}
          <motion.p
            className='text-white text-lg hover:text-emerald-500 cursor-pointer'
            whileTap={{ scale: 0.95 }}
            onClick={handleSignOut} // Call sign-out logic
          >
            Sign Out
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default UserProfileDetails;
