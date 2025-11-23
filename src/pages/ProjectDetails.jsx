import React from 'react'
import { useParams } from "react-router-dom";
import { PROJECTS } from '../assets/assets';


export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <h1 className="text-center mt-20">Project Not Found</h1>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{PROJECTS.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{PROJECTS.longDescription}</p>
    </div>
  );
}
