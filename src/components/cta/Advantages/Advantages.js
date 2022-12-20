import React from 'react'
import Layout from '../../container/Layout'
import styles from './Advantages.module.css'
import MotorEletrico from '../../../icons/motoreletrico.png'
import Rastreador from '../../../icons/rastreador.png'
import Sustentavel from '../../../icons/sustentavel.png'
import Rapidez from '../../../icons/rapidez.png'
import Seguranca from '../../../icons/seguranca.png'
import Quadro from '../../../icons/quadro.png'

const Advantages = () => {
  return (
    <section className={styles.advantages}>
        <Layout>
            <h1>nossas vantagens<span>.</span></h1>
            <ul>
                <li>
                    <img src={MotorEletrico} alt="Motor elétrico icone"/>
                    <h2>Reparo elétrico</h2>
                    <p>
                        Garantimos o reparo completo do seu motor em caso de falhas. 
                        Sabemos que falhas são raras, mas estamos aqui para caso ocorra.
                    </p>
                </li>
                <li>
                    <img src={Rastreador} alt="Rastreador icone"/>
                    <h2>Recuperação</h2>
                    <p>
                        Recuperamos Bikcrafts roubadas sem custo adicional para o dono. 
                        Se não conseguirmos recuperar, damos uma nova para você.
                    </p>
                </li>
                <li>
                    <img src={Sustentavel} alt="Sustentavel icone"/>
                    <h2>Sustentável</h2>
                    <p>
                        Trabalhamos com a filosofia de desperdício zero. 
                        Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.
                    </p>
                </li>
                <li>
                    <img src={Rapidez} alt="Rapidez icone"/>
                    <h2>Rapidez</h2>
                    <p>
                        A sua Bikcraft ficará pronta para uso no mesmo dia, 
                        caso você traga ela para ser reparada em uma das filiais.
                    </p>
                </li>
                <li>
                    <img src={Seguranca} alt="Segurança icone"/>
                    <h2>Segurança</h2>
                    <p>
                        O nosso seguro garante que todo reparo seja feito com peças 
                        genuínas e de alta qualidade. Confie na Bikcraft.
                    </p>
                </li>
                <li>
                    <img src={Quadro} alt="Quadro icone"/>
                    <h2>Reparo de quadro</h2>
                    <p>
                        Nossos quadros são feitos para durar para sempre. 
                        Mas caso algo ocorra, ficamos felizes em reparar.
                    </p>
                </li>
            </ul>
        </Layout>
    </section>
  )
}

export default Advantages