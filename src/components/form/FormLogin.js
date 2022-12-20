import React from 'react'
import styles from '../../styles/form/FormLogin.module.css'
import bikeStoreLogoIcon from '../../icons/bikestoreLogoIcon.svg'
import FacebookIcon from '../../icons/facebook.png'
import GoogleIcon from '../../icons/google.png'
import Input from './Input'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const FormLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const dados = {
      email: email,
      password: password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch('http://localhost:3030/auth/login', options)
    const json = await response.json()
    localStorage.setItem('token', json.token)
    setLoading(false)
    window.location.replace("/")
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <img src={bikeStoreLogoIcon} alt="BikeStore Icone"/>
        <h1>Sign In</h1>
        <Input
        onChange={(event) => setEmail(event.target.value)}
        type="email" 
        placeholder="aaron@column.com" 
        required/>

        <Input
        onChange={(event) => setPassword(event.target.value)}
        type="password" 
        placeholder="your password" 
        required/>


        <span>Recovery password</span>
        {loading ? <Button disabled={true}>Carregando...</Button> : <Button>Sign in</Button>}
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