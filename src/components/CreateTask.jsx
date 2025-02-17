import React, { useState } from 'react';

const CreateTask = () => {
  // State for form fields
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Task Created:");
    console.log({
      taskTitle,
      date,
      assignedTo,
      category,
      description
    });
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex-wrap flex w-full items-start justify-between'>
        {/* Left side form inputs */}
        <div className='w-1/2'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input 
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' 
            type='text' 
            placeholder='Make a UI design' 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' 
              type='date' 
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' 
              type='text' 
              placeholder='Employee name' 
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' 
              type='text' 
              placeholder='Design, Dev, etc' 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* Right side Description */}
        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea 
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
