import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
<div className='flex justify-between items-center'>
    <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
<h4 className='text-sm'>1 feb 2025</h4>
</div>
<h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
<p className='text-sm mt-2 line-clamp-3'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ex illo aspernatur corrupti, impedit tenetur esse fugiat, deserunt libero distinctio quos tempore voluptates excepturi cum, enim laborum animi eius delectus.
</p>
<div className='mt-4 flex gap-7'>
<button className='bg-purple-500 text-sm' >Mark as completed</button>
<button className='bg-green-400 text-sm'>Mark as failed</button>

</div>
</div>
  )
}

export default NewTask