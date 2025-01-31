import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-fuchsia-700 p-3 m-2 flex justify-between items-center'>
      <h1 className='text-white text-lg font-bold'>Sagarmatha Fashion Wears</h1>
      <div className='flex space-x-4'>
        <Link to={'/'} className='text-white hover:text-fuchsia-300'>Home</Link>
        <Link to={'/about'} className='text-white hover:text-fuchsia-300'>About</Link>
        <Link to={'/contact'} className='text-white hover:text-fuchsia-300'>Contact</Link>
        <Link to={'/product'} className='text-white hover:text-fuchsia-300'>Product</Link>
      </div>
    </div>
  )
}

export default Header
