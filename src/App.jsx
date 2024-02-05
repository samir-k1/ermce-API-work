import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import ProductDetail from './Page/ProductDetail'

function App() {
  
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product-detail/:id' element={<ProductDetail/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
