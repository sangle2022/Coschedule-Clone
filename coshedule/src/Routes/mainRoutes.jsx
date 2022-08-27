import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calender from '../Components/Calender/Calender'
import CreateNewProject from '../Components/Calender/CreateNewProject'


const MainRoutes = () => {
  {/*makes changes in only in your route then check if it is working*/}
  return (
    <Routes>
      {/* Make change
      s in "/" Route when home page is ready and link it from pages folder only the person whom homepage is asigned*/}
       <Route path='/calender' element={<Calender/>}/>
  <Route path='/newproject' element={<CreateNewProject/>}/>

      <Route path="/" element={<h1>Homepage</h1>} /> 
    </Routes>
  )
}

export default MainRoutes