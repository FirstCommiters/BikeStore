import React from 'react'
import FormRegister from '../components/form/FormRegister'
import Intro from '../components/Intro'
import Layout from '../components/container/Layout'
import styles from '../styles/Register.module.css'

const Register = () => {

  const [token, setToken] = React.useState(null)

  const localStorageToken = localStorage.getItem('token')

  React.useEffect(()=> {
    setToken(localStorageToken)

    if(token) {
      window.location.replace("/")
    }
  }, [localStorageToken, token])

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