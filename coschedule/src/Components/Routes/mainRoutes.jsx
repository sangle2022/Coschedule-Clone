import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Company from '../Pages/Company'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

const MainRoutes = () => {
  {/*makes changes in only in your route then check if it is working*/}
  return (
    <Routes>
      {/* Make changes in "/" Route when home page is ready and link it from pages folder only the person whom homepage is asigned*/}
      <Route path="/" element={<h1>Homepage</h1>} /> 
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} /> 
      <Route path='/company' element={<Company/>} />
    </Routes>
  )
}

export default MainRoutes