import React from 'react';

const TaskListNumber = ({ data }) => {
  return (
    <div className='flex flex-wrap mt-10 justify-between gap-5'>
      <div className='rounded-xl w-full sm:w-[45%] py-5 px-6 bg-red-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-full sm:w-[45%] py-5 px-6 bg-fuchsia-600'>
        <h2 className='text-2xl font-semibold'>2</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-full sm:w-[45%] py-5 px-6 bg-green-500'>
        <h2 className='text-2xl font-semibold'>4</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='rounded-xl w-full sm:w-[45%] py-5 px-6 bg-yellow-300'>
        <h2 className='text-2xl font-semibold'>3</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
