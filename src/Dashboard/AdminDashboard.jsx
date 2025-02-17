import React from 'react';
import Header from '../components/Header';  // Corrected path with lowercase 'c'
import CreateTask from '../components/CreateTask'; // Correct path
import AllTask from '../components/AllTask'; // Correct path

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full p-5 sm:p-7 lg:p-10 bg-[#1C1C1C]">
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
