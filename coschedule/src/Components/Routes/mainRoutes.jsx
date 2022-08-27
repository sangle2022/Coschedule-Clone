import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Calendar_home from '../Pages/Calendar/Calendar_home'
import MarketingCalendar from '../Pages/Products/MarketingCalendar/MarketingCalendar'
import MarketingSuite from '../Pages/Products/MarketingSuite/MarketingSuite'


import Home from "./Home";

const MainRoutes = () => {
  {/*makes changes in only in your route then check if it is working*/}
  return (
    <Routes>
      {/* Make changes in "/" Route when home page is ready and link it from pages folder only the person whom homepage is asigned*/}

      <Route path="/marketing-suite" element={<MarketingSuite />} />
      <Route path="/marketing-calendar" element={<MarketingCalendar />} />
      <Route path="/calendar-home" element={<Calendar_home />} />
      <Route path="/" element={<h1>Homepage</h1>} /> 

      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default MainRoutes