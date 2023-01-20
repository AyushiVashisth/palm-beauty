import React from 'react'
import Footer from './Footer'
import AddProductLanding from './HomeComponents/AddProductLanding'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <AddProductLanding/>
      <Footer/>
    </div>
  )
}

export default LandingPage
