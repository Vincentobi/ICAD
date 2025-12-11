import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../assets/assets'

const Projects = () => {

const categories = ["All Projects", "Healthcare", "Education", "Environment"];
const [selected, setSelected] = useState("All Projects");

const filtered =
    selected === "All Projects"
      ? PROJECTS
      : PROJECTS.filter(p => p.category === selected);


  return (

    <div className="p-8 max-w-6xl mx-auto"> 
      {/* Category Filters */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-6 py-2 rounded-full border transition
              ${selected === cat
                ? "bg-blue-200 text-blue-700 border-blue-400"
                : "bg-gray-100 text-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map(PROJECTS => (
          <div
            key={PROJECTS.id}
            className="rounded-xl shadow bg-white overflow-hidden text-gray-500 dark:text-gray-400"
          >
            <img
              src={PROJECTS.thumbnail}
              alt={PROJECTS.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {PROJECTS.category}
              </span>

              <h3 className="text-xl font-bold mt-4">{PROJECTS.title}</h3>
              <p className="text-gray-600 mt-2">{PROJECTS.shortDescription}</p>

              <Link
                to={`/projects/${PROJECTS.id}`}
                className="text-blue-600 font-semibold mt-4 inline-flex items-center gap-2"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Projects
