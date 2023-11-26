import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'

const Event = () => {
  return (
    <main className="main container">
      <Navbar />
      <EventCard />
      <Footer />
    </main>
  )
}

export default Event;
