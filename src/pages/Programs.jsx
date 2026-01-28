import React from 'react'
import { Routes, Route } from "react-router-dom"
import Projects from '../components/Projects'
import ProjectDetails from './ProjectDetails';
import Footer from '../components/Footer';


const Programs = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  
  );
}

export default Programs
