import React from 'react'
import styles from '../../styles/form/FormLogin.module.css'
import bikeStoreLogoIcon from '../../icons/bikestoreLogoIcon.svg'
import FacebookIcon from '../../icons/facebook.png'
import GoogleIcon from '../../icons/google.png'
import Input from './Input'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const FormLogin = () => {
  return (
    <form className={styles.form}>
        <img src={bikeStoreLogoIcon} alt="BikeStore Icone"/>
        <h1>Sign In</h1>
        <Input type="email" placeholder="aaron@column.com" required/>
        <Input type="password" placeholder="your password" required/>
        <span>Recovery password</span>
        <Button>Sign in</Button>
        <div className={styles.divisor}>
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        <div className={styles.socialLogin}>
          <img src={GoogleIcon} alt="Outra forma de login com o Google"/>
          <img src={FacebookIcon} alt="Outra forma de login com o Facebook"/>
        </div>
        <div className={styles.formFooter}>
          <p>Don't have a column account?</p>
          <NavLink to='/register' className={styles.createNewAccount}>Create new account</NavLink>
        </div>
    </form>
  )
}

export default FormLogin