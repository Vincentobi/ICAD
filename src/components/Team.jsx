import React from 'react'

const Team = (image, name, role, description) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <img className="h-40 w-40 rounded-full object-cover" src={image} alt={name} />
      <h3 className="mt-4 text-xl font-bold">{name}</h3>
      <p className="text-primary text-sm font-medium">{role}</p>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default Team
