import React from 'react'
import Differential from '../components/home/Differential'
import Hero from '../components/home/Hero'
import Partners from '../components/home/Partners'
import Products from '../components/home/Products'
import Seguros from '../components/seguros/Seguros'

const Home = () => {
  return (
    <>
      <Hero/>
      <Products/>
      <Differential/>
      <Partners/>
      <Seguros/>
    </>
  )
}

export default Home