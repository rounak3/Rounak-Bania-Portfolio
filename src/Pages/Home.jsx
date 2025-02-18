import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import MyWork from '../Components/MyWork'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home