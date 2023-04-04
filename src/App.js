import React from 'react'
import ClickCounter from './Component/ClickCounter';
import { Routes,Route } from 'react-router-dom';
import Counter from './Component/PureComponent/PureComponent';
import Navbar from "./Component/Navbar/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ClickCounter/> }></Route>
      <Route path='/pure' element={<Counter/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
