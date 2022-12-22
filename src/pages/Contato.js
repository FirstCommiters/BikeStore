import React from 'react'
import ContatoForm from '../components/form/contato/ContatoForm'
import Intro from '../components/Intro'
import Locais from '../components/maps/Locais'

const Contato = () => {
  return (
    <>
    <Intro text="respostas em até 24 horas" title="nosso contato"/>
    <ContatoForm/>
    <Locais/>
    </>
  )
}

export default Contato
