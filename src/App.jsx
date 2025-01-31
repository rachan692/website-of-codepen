import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MaterialUi } from './components/MaterialUi'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        {/* Product route: display the product cards */}
        <Route path='/product' element={
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {data.map((elem, idx) => (
              <div key={idx}>
                <MaterialUi name={elem.title} img={elem.image} des={elem.description} />
              </div>
            ))}
          </div>
        }/>
      </Routes>
    </div>
  )
}

export default App
