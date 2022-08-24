import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MarketingCalendar from '../Pages/Products/MarketingCalendar/MarketingCalendar'
import MarketingSuite from '../Pages/Products/MarketingSuite/MarketingSuite'

const MainRoutes = () => {
  {/*makes changes in only in your route then check if it is working*/}
  return (
    <Routes>
      {/* Make changes in "/" Route when home page is ready and link it from pages folder only the person whom homepage is asigned*/}
      <Route path="/" element={<h1>Homepage</h1>} /> 
      <Route path="/marketing-calendar" element={<MarketingCalendar />} />
      <Route path="/marketing-suite" element={<MarketingSuite />} />
    </Routes>
  )
}

export default MainRoutes