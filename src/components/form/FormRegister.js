import React from 'react'
import Button from './Button'
import bikeStoreLogoIcon from '../../icons/bikestoreLogoIcon.svg'
import Input from './Input'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/form/FormRegister.module.css'

const FormRegister = () => {
  return (
    <form className={styles.form}>
        <img src={bikeStoreLogoIcon} alt="BikeStore Icone"/>
        <h1>Sign In</h1>
        <Input type="text" placeholder="Digite seu nome" required/>
        <Input type="email" placeholder="aaron@column.com" required/>
        <Input type="password" placeholder="Digite sua senha" required/>
        <Input type="password" placeholder="Confime sua senha" required/>  
        <Button>Sign in</Button>
        <NavLink className={styles.haveAnAccount} to='/login'>Already have an account?</NavLink>
    </form>
  )
}

export default FormRegister