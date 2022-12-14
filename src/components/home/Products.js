import React from 'react'
import styles from './Products.module.css'
import Magic from '../../images/Home/magicMight.png'
import Nebula from '../../images/Home/nebula.png'
import Nimbus from '../../images/Home/nimbus.png'
import Layout from '../container/Layout'

const Products = () => {
  return (
    <section className={styles.productSection}>
      <Layout>
        <h1 className={styles.productTitle}>mais vendidas<span>.</span></h1>
      </Layout>
      <ul>
        <li>
          <img src={Magic} alt="Bicicleta Magic"/>
          <h1>Magic Might</h1>
          <span>R$2499</span>
        </li>
        <li>
          <img src={Nebula} alt="Bicicleta Nebula"/>
          <h1>Nebula Cosmic</h1>
          <span>R$3999</span>
        </li>
        <li>
          <img src={Nimbus} alt="Bicicleta Nimbus"/>
          <h1>Nimbus Stark</h1>
          <span>R$2999</span>
        </li>
      </ul>
    </section>
  )
}

export default Products