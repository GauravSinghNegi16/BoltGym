import React from 'react'
import Hero from './Hero'
import Program from './Program'
import Fees from './Fees'
import About from './About'
import Review from './Review'
import Footer from './Footer'
function Home() {
  return (
    <div>
      <Hero />
      <Program />
      <Fees /> 
      <About />
      <Review />
      <Footer />
    </div>
  )
}

export default Home