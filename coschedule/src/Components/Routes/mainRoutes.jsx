import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home";
const MainRoutes = () => {
  {/*makes changes in only in your route then check if it is working*/}
  return (
    <Routes>
      {/* Make changes in "/" Route when home page is ready and link it from pages folder only the person whom homepage is asigned*/}
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default MainRoutes