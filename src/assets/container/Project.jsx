import React, { useState } from 'react';

// This is your original component
const OriginalProject = () => {
  return (
    <div className='text-white'>Project</div>
  );
};

// This is the enhanced component with CodePen features
const Project = () => {
  const [featuredProjects, setFeaturedProjects] = useState([
    {
      id: 1,
      title: "Glitchy Surveillance UI",
      author: "Matt Cannon",
      isPro: true,
      thumbnail: "/path/to/surveillance-thumbnail.jpg"
    },
    {
      id: 2,
      title: "Glass Button",
      author: "Petr Knoll",
      isPro: true,
      thumbnail: "/path/to/glass-button-thumbnail.jpg"
    },
    {
      id: 3,
      title: "<pixel-canvas> Web Component",
      author: "Ryan Mulligan",
      isPro: true,
      thumbnail: "/path/to/pixel-canvas-thumbnail.jpg"
    },
    {
      id: 4,
      title: "Rainbow shadow button",
      author: "Adam Argyle",
      isPro: true,
      thumbnail: "/path/to/rainbow-button-thumbnail.jpg"
    }
  ]);

  const [suggestedUsers, setSuggestedUsers] = useState([
    {
      id: 1,
      username: "abassjutt",
      pens: 14,
      avatar: "/path/to/avatar1.jpg"
    },
    {
      id: 2,
      username: "Marlow DeNeal",
      pens: 6231,
      avatar: "/path/to/avatar2.jpg"
    },
    {
      id: 3,
      username: "Stephen Grider",
      pens: 221,
      avatar: "/path/to/avatar3.jpg"
    }
  ]);

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar Navigation */}
      <div className="w-36 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <div className="text-white font-bold">CREATE</div>
          <div className="mt-4">
            <button className="flex items-center text-white py-2 px-3 w-full rounded hover:bg-gray-800">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor" />
              </svg>
              <span>Pen</span>
            </button>
            <button className="flex items-center text-white py-2 px-3 w-full rounded hover:bg-gray-800 mt-2">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" fill="currentColor" />
              </svg>
              <span>Collection</span>
            </button>
          </div>
        </div>
        
        <div className="flex-1">
          <nav className="py-4">
            <ul>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Your Work</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Activity</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Assets</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Bookmarks</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Following</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Trending</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Challenges</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800">Spark</a>
              </li>
            </ul>
          </nav>
          
          <div className="mt-auto p-4">
            <div className="flex items-center">
              <div className="text-white font-medium">CodePen</div>
              <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-600 rounded text-black font-bold">PRO</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <button className="p-2 text-white bg-gray-800 rounded hover:bg-gray-700 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
                </svg>
              </button>
              <button className="p-2 text-white bg-gray-800 rounded hover:bg-gray-700 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" fill="currentColor" />
                </svg>
              </button>
              <button className="p-2 text-white bg-gray-800 rounded hover:bg-gray-700 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header section with "Picked by CodePen" */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-lg font-medium text-white">Picked by CodePen</span>
            <div className="ml-2 flex-grow h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
          </div>
          
          {/* Featured projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-700 relative">
                  {/* Project preview/thumbnail would go here */}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-600 mr-3"></div>
                      <div>
                        <h3 className="font-medium text-white">{project.title}</h3>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-400">{project.author}</span>
                          {project.isPro && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-600 rounded text-black font-bold">PRO</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Interesting People to Follow section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6 text-white">Interesting People to Follow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestedUsers.map(user => (
              <div key={user.id} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-400 flex items-center justify-center text-black mr-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" />
                      <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-white">{user.username}</h3>
                    <span className="text-sm text-gray-400">{user.pens} Pens</span>
                  </div>
                  <button className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded text-sm font-medium flex items-center">
                    <span>+</span>
                    <span className="ml-1">Follow</span>
                  </button>
                </div>
                <div className="h-32 bg-gray-700 rounded">
                  {/* User's work preview would go here */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the enhanced component
export default Project;