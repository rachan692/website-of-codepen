import React from 'react';

const AcceptTask = ({data}) => {
console.log()
  return (
    <div className="flex-shrink-0 h-full p-5 w-full sm:w-[300px] md:w-[300px] lg:w-[300px] bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 line-clamp-3">
{data.taskDescription}
      
      </p>

      {/* Button placed inside the card, below the paragraph */}
      <div className="mt-4">
        <button className="bg-emerald-500 py-1 px-2 text-sm">Accept Task</button>
      </div>
    </div>
  );
};

export default AcceptTask;
