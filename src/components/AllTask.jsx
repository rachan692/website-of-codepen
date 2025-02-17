import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AllTask = () => {
  const { userData } = useContext(AuthContext); // Destructure userData from the context

  // Log userData to debug and check if data is being passed correctly
  useEffect(() => {
    console.log('User Data:', userData);
  }, [userData]);

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-auto overflow-auto'>
      {/* Header row */}
      <div className='grid grid-cols-5 gap-4 bg-emerald-600 text-white py-2 px-4 rounded'>
        <h2 className='font-semibold text-center'>Employee Name</h2>
        <h3 className='font-semibold text-center'>Task Title</h3>
        <h5 className='font-semibold text-center'>New Task</h5>
        <h5 className='font-semibold text-center'>Active Task</h5>
        <h5 className='font-semibold text-center'>Completed</h5>
        <h5 className='font-semibold text-center'>Failed</h5>
      </div>

      {/* List of employees and tasks */}
      {userData?.employees?.length > 0 ? (
        userData.employees.map((employee) => (
          <div key={employee.id} className='my-4'>
            {employee.tasks?.length > 0 ? (
              employee.tasks.map((task, index) => (
                <div
                  key={index}
                  className='grid grid-cols-6 gap-4 bg-red-400 py-2 px-4 mb-2 rounded text-white'
                >
                  <h2 className='text-center'>{employee.firstName}</h2> {/* Employee Name */}
                  <h3 className='text-center'>{task.taskTitle}</h3> {/* Task Title */}
                  <h5 className='text-center'>{task.newTask ? 'Yes' : 'No'}</h5> {/* New Task */}
                  <h5 className='text-center'>{task.active ? 'Active' : 'Inactive'}</h5> {/* Active Task */}
                  <h5 className='text-center'>{task.completed ? 'Completed' : 'Not Completed'}</h5> {/* Completed */}
                  <h5 className='text-center'>{task.failed ? 'Failed' : 'Not Failed'}</h5> {/* Failed */}
                </div>
              ))
            ) : (
              <p>No tasks available for {employee.firstName}</p> // Fallback if no tasks
            )}
          </div>
        ))
      ) : (
        <p>No employees found</p> // Fallback if no employees found
      )}
    </div>
  );
};

export default AllTask;
