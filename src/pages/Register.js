import React from 'react'
import FormRegister from '../components/form/FormRegister'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import styles from '../styles/Register.module.css'

const Register = () => {
  return (
    <section>
        <Intro text="Bike-store" title="Cadastre-se"/>
        <Layout>
            <div className={styles.background}>
                <FormRegister/>
            </div>
        </Layout>
    </section>
  )
}

export default Register