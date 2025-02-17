import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  console.log(handleLogin)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  const submitHandler = (e)=>{
    e.preventDefault()
handleLogin(email,password)
setEmail("")
setPassword("")  
}

    return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
          <form onSubmit={(e)=>{
submitHandler(e)
          }}
           className='flex flex-col items-center justify-center'>
            <input value={email}
          required 
          onChange={(e)=>{
setEmail(e.target.value)
          }}
          className='outline-none border-2 bg-transparent border-emerald-600 py-4 text-xl px-5 placeholder:text-gray-400 text-white rounded-full' 
              type='email' 
              placeholder='Enter your email' 
            />
            <input 
            value={password}
            onChange={(e)=>{
            setPassword(e.target.value)
            }}  
             required
              className='outline-none border-2 mt-4 bg-transparent border-emerald-600 py-4 text-xl px-5 placeholder:text-gray-400 text-white rounded-full' 
              type='password' 
              placeholder='Enter your password' 
            />
            <button 
              className='text-white outline-none border-2 mt-5 bg-emerald-600 px-7 py-3 text-xl placeholder:text-white rounded-full border-none'>
              Login
            </button>
          </form>
        </div>
    </div>
  )
}

export default Login
