import React from 'react'
import Intro from '../components/Intro'
import Layout from '../components/container/Layout'
import styles from '../styles/Login.module.css'
import FormLogin from '../components/form/FormLogin'

const Login = () => {
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