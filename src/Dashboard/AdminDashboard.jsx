import React from 'react';
import Header from '../Components/Header'; // Ensure this path is correct based on your folder structure
import CreateTask from '../Components/CreateTask';
import AllTask from '../Components/AllTask';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full p-5 sm:p-7 lg:p-10 bg-gray-100">
      {/* Header Section */}
      <div className="mb-6">
        <Header />
      </div>

      {/* Create Task Section */}
      <section className="mt-7 sm:mt-10">
        <div className="max-w-full sm:max-w-3xl mx-auto">
          <CreateTask />
        </div>
      </section>

      {/* All Task Section */}
      <section className="mt-7 sm:mt-10">
        <div className="max-w-full sm:max-w-4xl mx-auto">
          <AllTask />
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
