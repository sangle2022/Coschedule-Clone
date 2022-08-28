import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Company from '../Pages/Company'

import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'


import Main from '../Pages/pricing_page/Main';


import Calendar_home from '../Pages/calendar_home/Calendar_home'
import MarketingCalendar from '../Pages/Products/MarketingCalendar/MarketingCalendar'
import MarketingSuite from '../Pages/Products/MarketingSuite/MarketingSuite'


import Home from "./Home";
import Calender from '../Calender/Calender'
import NewTask from '../Calender/NewTask'


const MainRoutes = () => {
  {/*makes changes in only in your route then check if it is working*/}
  return (
    <Routes>
      {/* Make changes in "/" Route when home page is ready and link it from pages folder only the person whom homepage is asigned*/}
      <Route path="/" element={<Home />} />
      <Route path="/marketing-suite" element={<MarketingSuite />} />
      <Route path="/marketing-calendar" element={<MarketingCalendar />} />
      <Route path="/calendar-home" element={<Calendar_home />} />
      

      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} /> 
      <Route path='/company' element={<Company/>} />
      <Route path='/calender' element={<Calender/>}/>
      <Route path='/newproject' element={<NewTask />}/>
       


      <Route path="/pricing_page" element={<Main/>} /> 

     



    </Routes>
  )
}

export default MainRoutes