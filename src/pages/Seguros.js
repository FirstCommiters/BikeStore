import React from 'react'
import Advantages from '../components/cta/Advantages/Advantages'
import Intro from '../components/Intro'
import Security from '../components/seguros/Seguros'

const Seguros = () => {
  return (
    <section>
        <Intro text="Escolha o melhor para você" title="você seguro"/>
        <Security/>
        <Advantages/>
    </section>
  )
}

export default Seguros