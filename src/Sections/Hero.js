import React from 'react'
import Button from '../components/Button'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Hero = () => {
  return (
    <section className="HeroContainer">
       <div className="SubHero">
           <div className="HeroContent">
              <p>
              <span>B</span>oost up your skills in a new way of learning and unleash <br/>your potential with us..
              </p>
              <Button BtnName="Explore Now" href="#AboutPage"/>
           </div>
       </div>
            <div className="GoUp">
           <HashLink to="/#Home" className='GoUp'>
           <i className="bi bi-arrow-up" href="#Home"></i>
           </HashLink>
            </div>
    </section>
  )
}

export default Hero
