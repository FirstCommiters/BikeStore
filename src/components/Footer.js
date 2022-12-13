import React from 'react'
import Logo from '../images/BikeStore.svg'
import Layout from './Layout'
import styles from '../styles/Footer.module.css'
import FacebookIcon from '../icons/facebook.svg'
import YoutubeIcon from '../icons/youtube.svg'
import InstagramIcon from '../icons/instagram.svg'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.grid}>
            <img src={Logo} alt="Logo BikeStore" />
          <div>
            <h1>Contato</h1>
            <ul>
              <li>+55 81 9999-9999</li>
              <li>contato@bikestore.com</li>
              <div className={styles.divisor}></div>
              <li>Rua ali perto, 42 - Botafogo</li>
              <li>Rio de janeiro - RJ</li>
              <div className={styles.divisor}></div>
              <div className={styles.icons}>
                <img src={InstagramIcon} alt="Icone do Instagram"/>
                <img src={FacebookIcon} alt="Icone do Facebook"/>
                <img src={YoutubeIcon} alt="Icone do Youtube"/>
              </div>
            </ul>
          </div>
          <div>
            <h1>Informações</h1>
            <ul>
              <li>Bicicletas</li>
              <li>Seguros</li>
              <li>Contato</li>
              <li>Termos e Condições</li>
            </ul>
          </div>
          <span className={styles.copy}>BikeStore © alguns direitos reservados</span>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer