import React from 'react'
import Team from '../components/Team'
import { TEAM } from '../assets/assets'

const Teams = () => {
  return (
<section className="py-16 sm:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] text-center">The People Behind Our Mission</h2>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-999">

<Team 
  image={TEAM[0].title}
  name = 'Kevin Nnadi'
  role={TEAM[0].role}
  description={TEAM[0].description}
/>

<Team 
  image={TEAM[1].title}
  name = 'Chief Mike'
  role={TEAM[1].role}
  description={TEAM[1].description}
/>

<Team 
  image={TEAM[2].title}
  name = 'Beckteck'
  role={TEAM[2].role}
  description={TEAM[2].description}
/>

<Team 
  image={TEAM[3].title}
  name = 'Grace Nnadi'
  role={TEAM[3].role}
  description={TEAM[3].description}
/>
</div>
</div>
</section>
  )
}

export default Teams
