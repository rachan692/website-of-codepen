import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-yellow-300 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-semibold line-clamp-3'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 line-clamp-3'>
{data.taskDescription}
      </p>

      {/* Buttons inside the card */}
      <div className="mt-2">
      <button className='w-full bg-red-500 rounded-xl'>Failed</button>
      </div>
    </div>
  )
}

export default FailedTask