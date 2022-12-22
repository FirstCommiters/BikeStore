import React from 'react'
import Layout from '../container/Layout'
import styles from './Locais.module.css'
import Rio from '../../images/rio.png'
import Sp from '../../images/sp.png'

const Locais = () => {
  return (
    <section className={styles.locais}>
      <Layout>
        <h1>Lojas locais<span>.</span></h1>
        <ul className={styles.maps}>
            <li>
                <img src={Rio} alt="Mapa do rio de janeiro"/>
                <h2>Rio de janeiro</h2>
                <ul>
                    <li>
                        <p>Rua Ali Perto, 42 </p>
                        <p>Rio de janeiro - RJ </p>
                    </li>
                    <li>
                        <p>contato@email.com </p>
                        <p>(81) 9 9999-9999 </p>
                    </li>
                </ul>
                <span>08-18h de seg à dom</span>
            </li>
            <li>
                <img src={Sp} alt="Mapa de São Paulo"/>
                <h2>São Paulo</h2>
                <ul>
                    <li>
                        <p>Rua Ali Perto, 42 </p>
                        <p>São Paulo - SP </p>
                    </li>
                    <li>
                        <p>contato@email.com </p>
                        <p>(81) 9 9999-9999 </p>
                    </li>
                </ul>
                <span>08-18h de seg à dom</span>
            </li>
        </ul>
      </Layout>
    </section>
  )
}

export default Locais
