import React from 'react'
import styles from './Hero.module.css'
import ButtonCta from '../cta/ButtonCta/ButtonCta'
import Layout from '../container/Layout'
import imgIntro from '../../images/Home/img-intro.png'

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <Layout>
                <div className={styles.hero}>
                    <div className={styles.textContent}>
                        <h1>
                            Bicicletas feitas
                            sob medida<span>.</span>
                        </h1>
                        <p>
                            Bicicletas elétricas de alta precisão e qualidade,  feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.
                        </p>
                        <ButtonCta>Selecione a sua</ButtonCta>
                    </div>
                    <div>
                        <img src={imgIntro} alt="Bicicleta elétrica Nimbus Stark" />
                    </div>
                </div>
            </Layout>
        </section>
    )
}

export default Hero