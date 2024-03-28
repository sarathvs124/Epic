import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Pages/Project/Project"
import Home from './Pages/Home/Home';
import pageNot from './components/404/pageNotFound'

const Routess = () => {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route  path="/" element={<Home /> } />
          <Route path="project" element={<Project />} />
          <Route path="*" element={ <pageNot/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default Routess