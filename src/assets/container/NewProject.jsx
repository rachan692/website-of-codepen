import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MdCheck, MdEdit } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Settings from './CodePenSettings'; // Import the Settings component

const NewProject = () => {
  const [htmlCode, setHtmlCode] = useState("<!-- Write your HTML code here -->");
  const [cssCode, setCssCode] = useState("/* Write your CSS code here */");
  const [jsCode, setJsCode] = useState("// Write your JavaScript code here");

  const [titleText, setTitleText] = useState('Untitled');
  const [isEditing, setIsEditing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Menu toggle state for profile dropdown
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for settings modal

  const navigate = useNavigate();

  const handleHtmlChange = (value) => {
    setHtmlCode(value);
  };

  const handleCssChange = (value) => {
    setCssCode(value);
  };

  const handleJsChange = (value) => {
    setJsCode(value);
  };

  const generateResult = () => {
    const result = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    return result;
  };

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

  const handleSave = () => {
    setAlertVisible(true); // Show the alert when the Save button is clicked
    setTimeout(() => {
      setAlertVisible(false); // Hide the alert after 3 seconds
    }, 3000);
  };

  return (
    <div className='h-screen w-screen flex flex-col overflow-hidden bg-[#1a1a1a]'>
      {/* Header section */}
      <header className='w-full flex items-center justify-between px-6 py-2 border-b border-gray-700'>
        <div className='flex items-center justify-center gap-4'>
          <Link to={'/home'} className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 text-xl text-white">
              ⬡
            </div>
          </Link>

          {/* Title displayed next to the logo */}
          <div className='flex flex-col items-start'>
            <div className='flex items-center'>
              <AnimatePresence>
                {isEditing ? (
                  <>
                    <motion.input
                      key={"TitleInput"}
                      type='text'
                      value={titleText}
                      onChange={(e) => setTitleText(e.target.value)}
                      className="px-3 py-2 rounded-md bg-transparent text-white text-base outline-none border-none"
                      autoFocus
                    />
                  </>
                ) : (
                  <>
                    <motion.p
                      key={'titleLabel'}
                      className='text-white text-lg cursor-pointer'
                      onClick={() => setIsEditing(true)} // Click to edit
                    >
                      {titleText}
                    </motion.p>
                  </>
                )}
              </AnimatePresence>

              {/* Always show the Edit icon when not in the editing state */}
              {!isEditing && (
                <motion.div 
                  key="MdEdit"
                  whileTap={{ scale: 0.9 }} 
                  className='cursor-pointer ml-2'
                  onClick={() => setIsEditing(true)}   
                >
                  <MdEdit className='text-lg text-gray-400' />
                </motion.div>
              )}

              {/* When in edit mode, show the check icon */}
              {isEditing && (
                <motion.div 
                  key="MdCheck"
                  whileTap={{ scale: 0.9 }} 
                  className='cursor-pointer ml-2'
                  onClick={() => setIsEditing(false)}
                >
                  <MdCheck className='text-lg text-emerald-500' />
                </motion.div>
              )}
            </div>

            {/* Display the project name below the title */}
            <div className='flex items-center'>
              <p className='text-gray-400 text-xs'>
                {titleText} {/* Changed from hardcoded name to dynamic titleText */}
              </p>
            </div>
          </div>
        </div>

        {/* Rest of the code remains the same */}
        <div className='flex items-center justify-center gap-2 relative'>
          <motion.button 
            whileTap={{ scale: 0.95 }} 
            className='w-10 h-10 flex items-center justify-center bg-gray-700 rounded text-white'
          >
            <FaThLarge className='text-sm' />
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.95 }} 
            className='w-10 h-10 flex items-center justify-center bg-gray-700 rounded text-white'
          >
            <FaRegBookmark className='text-sm' />
          </motion.button>
          
          {/* Profile Picture */}
          <div className='w-10 h-10 flex items-center justify-center overflow-hidden cursor-pointer bg-[#10B981] rounded ml-1 text-white'>
            😊
          </div>

          {/* Settings button */}
          <motion.button 
            className='h-10 px-4 flex items-center justify-center gap-2 bg-gray-700 rounded cursor-pointer text-white'
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSettingsOpen(true)} // Open settings modal
          >
            <FaGear className='text-sm' />
            <span className='text-sm font-medium'>Settings</span>
          </motion.button>

          {/* Save Button */}
          <motion.button 
            className='h-10 px-4 flex items-center justify-center gap-2 bg-gray-700 rounded cursor-pointer text-white'
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
          >
            <FaCloud className='text-sm' />
            <span className='text-sm font-medium'>Save</span>
          </motion.button>
        </div>
      </header>

      {/* Rest of the component remains the same */}
      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1a1a1a] rounded-lg shadow-lg w-full max-w-2xl p-6">
            <Settings />
            <button
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              onClick={() => setIsSettingsOpen(false)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Alert */}
      {alertVisible && (
        <motion.div
          className='fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-md bg-emerald-500 text-white font-semibold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          File has been saved
        </motion.div>
      )}

      {/* Coding section */}
      <div className='flex-1 overflow-hidden'>
        <SplitPane 
          split="horizontal" 
          minSize={100} 
          maxSize={-100} 
          defaultSize={"60%"}
          className="custom-split-pane" // Added a class for potential custom styling
        >
          {/* Top coding section */}
          <SplitPane 
            split="vertical" 
            minSize={100} 
            defaultSize={"33%"}
            className="custom-split-pane" // Added a class for potential custom styling
          >
            {/* HTML Code */}
            <div className='w-full h-full flex flex-col'>
              <div className='w-full flex items-center justify-between bg-[#222]'>
                <div className='px-3 py-1 flex items-center gap-2'>
                  <FaHtml5 className='text-sm text-red-500' />
                  <p className='text-gray-300 font-medium text-sm'>HTML</p>
                </div>
              </div>
              <CodeMirror
                value={htmlCode}
                height="100%"
                extensions={[html()]}
                theme="dark"
                onChange={handleHtmlChange}
              />
            </div>

            {/* CSS Code */}
            <div className='w-full h-full flex flex-col'>
              <div className='w-full flex items-center justify-between bg-[#222]'>
                <div className='px-3 py-1 flex items-center gap-2'>
                  <FaCss3 className='text-sm text-blue-600' />
                  <p className='text-gray-300 font-medium text-sm'>CSS</p>
                </div>
              </div>
              <CodeMirror
                value={cssCode}
                height="100%"
                extensions={[css()]}
                theme="dark"
                onChange={handleCssChange}
              />
            </div>

            {/* JavaScript Code */}
            <div className='w-full h-full flex flex-col'>
              <div className='w-full flex items-center justify-between bg-[#222]'>
                <div className='px-3 py-1 flex items-center gap-2'>
                  <FaJs className='text-sm text-yellow-400' />
                  <p className='text-gray-300 font-medium text-sm'>JS</p>
                </div>
              </div>
              <CodeMirror
                value={jsCode}
                height="100%"
                extensions={[javascript()]}
                theme="dark"
                onChange={handleJsChange}
              />
            </div>
          </SplitPane>

          {/* Bottom Result Section */}
          <div className='bg-white h-full'>
            <iframe 
              title="result"
              srcDoc={generateResult()}
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default NewProject;