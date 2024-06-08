import React from 'react'
import HeroSection from '../components/HeroSection'
import SellSection from '../components/SellSection'
import Products from '../components/Products'
import Calculation from '../components/Calculation'
import Feedbacks from '../components/Feedbacks'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <SellSection/>
        <Products/>
        <Calculation/>
        <Feedbacks/>
        <Blogs/>
    </div>
  )
}

export default Home