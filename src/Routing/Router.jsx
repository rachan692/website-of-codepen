import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <div>
          <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
          </Routes>
    </div>
  )
}

export default Router