import React from 'react'
import Intro from '../components/Intro'
import Layout from '../components/container/Layout'
import styles from '../styles/Login.module.css'
import FormLogin from '../components/form/FormLogin'

const Login = () => {

  const [token, setToken] = React.useState(null)

  const localStorageToken = localStorage.getItem('token')

  React.useEffect(()=> {
    setToken(localStorageToken)

    if(token) {
      window.location.replace("/")
    }
  }, [localStorageToken, token])



  return (
    <section className={styles.login}>
      <Intro text="Bike-Store" title="Fazer login"/>
      <Layout>  
        <div className={styles.form}>
          <FormLogin/>
        </div> 
      </Layout>
    </section>
  )
}

export default Login