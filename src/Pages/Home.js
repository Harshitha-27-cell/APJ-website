import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../Sections/Hero'
import VideoBox from '../Sections/VideoBox'
import Platform from '../Sections/Platform'
import Team from '../Sections/Team'
import Footer from '../components/Footer'
import About from '../Sections/About'
// import ImageDisplay from '../Sections/ImageDisplay'

const Home = () => {
  return (
    <main className="main container">
      <Navbar />
      <VideoBox />
      <Hero />
      <About />
      <Platform />
      <Team />
      <Footer />
    </main>
  )
}

export default Home;
