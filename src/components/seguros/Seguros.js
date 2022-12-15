import React from 'react'
import Layout from '../container/Layout'
import CorrectIcon from '../../icons/correctIcon.png'
import styles from './Seguros.module.css'

const Seguros = () => {
  return (
    <section className={styles.segurosSection}>
        <Layout>
            <h1 className={styles.segurosTitle}>seguros<span>.</span></h1>
            <ul>
                <li>
                    <header>
                        <h1>Prata</h1>
                        <h2>R$199 <span>mensal</span></h2>
                    </header>
                    <div>
                        <p>Duas trocas por ano</p>
                        <p>Assistência técnica</p>
                        <p>Suporte 08h às 18h</p>
                        <p>Cobertura estadual</p>
                    </div>
                    <button>inscreva-se</button>
                </li>
                <li>
                    <header>
                        <h1 className={styles.goldenTitle}>Ouro</h1>
                        <h2>R$299 <span>mensal</span></h2>
                    </header>
                    <div>
                        <p>Cinco trocas por ano</p>
                        <p>Assistência especial</p>
                        <p>Suporte 24h</p>
                        <p>Cobertura nacional</p>
                        <p>Desconto em parceiros</p>
                        <p>Acesso ao club bikestore</p>
                    </div>
                    <button className={styles.goldenButton}>inscreva-se</button>
                </li>
            </ul>
        </Layout>
    </section>
  )
}

export default Seguros