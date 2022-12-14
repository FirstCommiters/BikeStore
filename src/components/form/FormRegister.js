import React, { useState } from 'react'
import Button from './Button'
import bikeStoreLogoIcon from '../../icons/bikestoreLogoIcon.svg'
import Input from './Input'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/form/FormRegister.module.css'

const FormRegister = () => {

  
  const [error, setError] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [loading, setLoading] = useState(false)




  // Verifica Tamanho da senha 
  function handleBlur() {
    if(password.length < 12) {
      setError(true)
    } else {
      setError(false)
    }
    // Verificando se as senhas são iguais
    if(verifyPassword !== password) {
      setError(true)
    } else {
      setError(false)
    }

  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    if(password !== verifyPassword) {
      console.log('As senhas precisam ser iguais')
      setError(true)
    } else {
      setError(false)
    }

    if(password === verifyPassword) {
      console.log('conta criada com sucesso')
    }

    setLoading(false)
  }


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <img src={bikeStoreLogoIcon} alt="BikeStore Icone"/>
        <h1>Sign In</h1>

        <Input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Digite seu nome" 
        required/>

        <Input 
        type="email" 
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="aaron@column.com" 
        required/>

        <Input 
        type="password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        onBlur={handleBlur}
        placeholder="Digite sua senha" 
        required/>
        {error && password.length < 12 && <p>A senha precisa conter no mínimo 12 caracteres</p>}
        
        <Input 
        type="password" 
        value={verifyPassword}
        onChange={(event) => setVerifyPassword(event.target.value)}
        placeholder="Confime sua senha" 
        required/>  
        {error && password !== verifyPassword && password.length >= 12 && <p>As senhas não coincidem</p>}

        {loading ? <Button disabled={true}>Carregando...</Button> : <Button>Sign in</Button>}
        <NavLink className={styles.haveAnAccount} to='/login'>Already have an account?</NavLink>
    </form>
  )
}

export default FormRegister