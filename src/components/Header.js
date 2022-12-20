import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/BikeStore.svg'
import styles from '../styles/Header.module.css'
import Layout from './container/Layout'

const Header = () => {

  const [token, setToken] = React.useState(null)

  const localStorageToken = localStorage.getItem('token')

  React.useEffect(()=> {
    setToken(localStorageToken)
  }, [localStorageToken])

  return (
    <header className={styles.header}>
      <Layout>
        <nav>
        <div>
            <NavLink to="/" end>
              <img src={Logo} alt="Bikestore Logo" />
            </NavLink>
          </div>
          <ul>
            <li><NavLink to="/bicicletas">Bicicletas</NavLink></li>
            <li><NavLink to="/seguros">Seguros</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
            {token ? <li><NavLink to="/perfil">perfil</NavLink></li> : <li><NavLink to="/login">Login</NavLink></li>}
          </ul>
        </nav>
      </Layout>
    </header>

  )
}

export default Header