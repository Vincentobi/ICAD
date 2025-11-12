import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeaturedProjects from './components/FeaturedProjects'
import CTAbanner from './components/CTAbanner'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedProjects />
      <CTAbanner />
      <Footer />
    </div>
  )
}

export default App
