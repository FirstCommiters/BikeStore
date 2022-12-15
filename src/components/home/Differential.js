import React from 'react'
import Layout from '../container/Layout'
import LinkCta from '../cta/LinkCta/LinkCta'
import styles from './Differential.module.css'
import MotorEletrico from '../../icons/motoreletrico.png'
import Rastreador from '../../icons/rastreador.png'
import Diferencial from '../../images/Home/diferencial.png'

const Differential = () => {
  return (
    <section className={styles.DifferentialSection}>
        <Layout>
            <div className={styles.DifferentialContainer}>
                <div className={styles.DifferentialContent}>
                    <h3>Tecnologia avançada</h3>
                    <h1>
                        você escolhe as suas cores e componentes<span>.</span>
                    </h1>
                    <p>
                        Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, 
                        garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente 
                        as suas cores.
                    </p>
                    <LinkCta>Escolha um modelo</LinkCta>
                    <div className={styles.footerContent}>
                        <div>
                            <div className={styles.cardTitle}>
                                <h2>Motor elétrico</h2>
                                <img src={MotorEletrico} alt="Icone do motor elétrico"></img>
                            </div>
                            <p>
                                Toda Bikcraft é equipada com um motor elétrico que possui duração 
                                de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.
                            </p>
                        </div>

                        <div>
                            <div className={styles.cardTitle}>
                                <h2>Rastreador</h2>
                                <img src={Rastreador} alt="Icone do motor elétrico"></img>
                            </div>
                            <p>
                                Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas 
                                anti-furto para garantir o seu sossego.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className={styles.diferencialImage} src={Diferencial} alt="Imagem com ferramentas de produção"/>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Differential