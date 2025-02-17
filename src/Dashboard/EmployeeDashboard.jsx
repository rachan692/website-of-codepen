import React from 'react';
import TaskListNumber from '../components/TaskListNumber';
import TaskList from '../TaskList/TaskList';
import Header from '../components/Header';  // Corrected import

const EmployeeDashboard = ({ data }) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} />  {/* Passing data as a prop to Header */}
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
