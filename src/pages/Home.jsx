import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import FeaturedProjects from '../components/FeaturedProjects'
import CTAbanner from '../components/CTAbanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <CTAbanner />
      <Footer />
    </div>
  )
}

export default Home
