import React from 'react'
import { Routes, Route } from "react-router-dom"
import Projects from '../components/Projects'
import ProjectDetails from './ProjectDetails';


const Programs = () => {
  return (

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/:id" element={<ProjectDetails />} />
      </Routes>
   
  );
}

export default Programs
