import React, { useState } from 'react';

const CodePenSettings = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentProject, setCurrentProject] = useState("NewProject.jsx");

  const handleClose = () => {
    setIsOpen(false); // Just close the screen without setting a new project.
  };

  if (!isOpen) {
    return null; // Return null to not render anything when the settings are closed.
  }

  return (
    <div className="bg-[#1e1f26] text-white max-w-4xl mx-auto shadow-lg flex flex-col h-screen mt-8">
      {/* Header with title and close button */}
      <div className="flex justify-between items-center p-4 pb-2 border-b border-gray-700">
        <div>
          <h1 className="text-xl font-semibold mb-1">Pen Settings</h1>
          <div className="h-1 w-44 bg-green-500"></div>
        </div>
        <button 
          onClick={handleClose} 
          className="bg-gray-700 hover:bg-gray-600 text-white h-8 w-8 flex items-center justify-center rounded"
          aria-label="Close settings"
        >
          ×
        </button>
      </div>
      
      {/* Main content area with sidebar and content */}
      <div className="flex flex-1 overflow-auto">
        {/* Left sidebar */}
        <div className="w-64 border-r border-gray-700 flex-shrink-0 hidden lg:block">
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer">HTML</div>
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer">CSS</div>
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer">JS</div>
          
          <div className="py-2 px-4 bg-[#2d2f39] border-l-4 border-green-500 text-white">Pen Details</div>
          
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer flex items-center justify-between">
            <span>Privacy</span>
            <span className="bg-yellow-500 text-black text-xs px-1 rounded font-bold">PRO</span>
          </div>
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer">Behavior</div>
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer">Editor</div>
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer">Template</div>
          <div className="py-2 px-4 text-white hover:bg-gray-700 cursor-pointer flex items-center justify-between">
            <span>Screenshot</span>
            <span className="bg-yellow-500 text-black text-xs px-1 rounded font-bold">PRO</span>
          </div>
        </div>
        
        {/* Right content area */}
        <div className="flex-1 p-4 bg-[#2d2f39]">
          {/* Pen Title */}
          <div className="mb-6">
            <h2 className="text-lg mb-4">Pen Title</h2>
            <input 
              type="text" 
              defaultValue="Untitled" 
              className="w-full p-3 bg-[#eee] text-gray-700 rounded"
            />
          </div>
          
          {/* Pen Description */}
          <div className="mb-6">
            <h2 className="text-lg mb-4">Pen Description</h2>
            <textarea 
              className="w-full p-3 bg-[#eee] text-gray-600 rounded resize-none h-32"
              defaultValue="Explain what's going on in your Pen here. This text is searchable, so it can also help others find your work. Remember to credit others where credit is due. Markdown supported."
            />
          </div>
          
          {/* Tags */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg">Tags</h2>
              <span className="text-sm text-gray-400">comma separated, max of five</span>
            </div>
            <input 
              type="text" 
              className="w-full p-3 bg-[#eee] text-gray-700 rounded"
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-[#353744] p-4 flex justify-between items-center flex-col lg:flex-row">
        <div className="text-white mb-4 lg:mb-0">
          Upgrade to <span className="bg-yellow-500 text-black px-1 rounded font-bold">PRO</span> and unlock Privacy, Custom Thumbnails, Asset Hosting, and more.
        </div>
        <button 
          onClick={handleClose}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded"
        >
          Save & Close
        </button>
      </div>
    </div>
  );
};

export default CodePenSettings;
