import React from 'react'
import styles from '../styles/Bicicletas.module.css'
import Intro from '../components/Intro'
import Nimbus from '../images/bicicletas/nimbusBike.png'
import Magic from '../images/bicicletas/magicBike.png'
import Nebula from '../images/bicicletas/NebulaBicke.png'
import ButtonCta from '../components/cta/ButtonCta/ButtonCta'

import Motor from '../icons/motoreletrico.png'
import Fibra from '../icons/quadro.png'
import Velocidade from '../icons/rapidez.png'
import Rastreador from '../icons/rastreador.png'

const Bicicletas = () => {
  return (
    <>
      <Intro text="Escolha a melhor para você" title="nossas bicicletas"/>
        <main className={styles.bicicletasBg}>
            
            <div className={styles.bicicleta}>
                <div className={styles.bicicletaImagem}>
                    <img src={Nimbus} alt="nimbus"/>
                    <span>R$ 4999</span>
                </div>
                <div className={styles.bicicletaConteudo}>
                    <h2>Nimbus Stark</h2>
                    <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. 
                        Ela vem equipada com os melhores acessórios, o que garante maior 
                        velocidade.
                    </p>

                    <div className={styles.informacoes}>

                        <ul>
                            <li>
                                <img className={styles.stick} src={Motor} alt=""/>
                                Motor Elétrico
                            </li>

                            <li>
                                <img className={styles.stick} src={Fibra} alt=""/>
                                Fibra de Carbono
                            </li>

                            <li>
                                <img className={styles.stick} src={Velocidade} alt=""/>
                                50km/h
                            </li>

                            <li>
                                <img className={styles.stick} src={Rastreador} alt=""/>
                                Rastreador
                            </li>
                        </ul>
                        <ButtonCta>Mais sobre</ButtonCta>
                    </div>
                    
                </div>
            </div>

            <div className={styles.bicicleta}>
                <div className={styles.bicicletaImagem}>
                    <img src={Magic} alt="nimbus"/>
                    <span>R$ 4999</span>
                </div>
                <div className={styles.bicicletaConteudo}>
                    <h2>Nimbus Stark</h2>
                    <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. 
                        Ela vem equipada com os melhores acessórios, o que garante maior 
                        velocidade.
                    </p>

                    <div className={styles.informacoes}>

                        <ul>
                            <li>
                                <img className={styles.stick} src={Motor} alt=""/>
                                Motor Elétrico
                            </li>

                            <li>
                                <img className={styles.stick} src={Fibra} alt=""/>
                                Fibra de Carbono
                            </li>

                            <li>
                                <img className={styles.stick} src={Velocidade} alt=""/>
                                50km/h
                            </li>

                            <li>
                                <img className={styles.stick} src={Rastreador} alt=""/>
                                Rastreador
                            </li>
                        </ul>
                        <ButtonCta>Mais sobre</ButtonCta>
                    </div>
                    
                </div>
            </div>

            <div className={styles.bicicleta}>
                <div className={styles.bicicletaImagem}>
                    <img src={Nebula} alt="nimbus"/>
                    <span>R$ 4999</span>
                </div>
                <div className={styles.bicicletaConteudo}>
                    <h2>Nimbus Stark</h2>
                    <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. 
                        Ela vem equipada com os melhores acessórios, o que garante maior 
                        velocidade.
                    </p>

                    <div className={styles.informacoes}>
                        <ul>
                            <li>
                                <img className={styles.stick} src={Motor} alt=""/>
                                Motor Elétrico
                            </li>

                            <li>
                                <img className={styles.stick} src={Fibra} alt=""/>
                                Fibra de Carbono
                            </li>

                            <li>
                                <img className={styles.stick} src={Velocidade} alt=""/>
                                50km/h
                            </li>

                            <li>
                                <img className={styles.stick} src={Rastreador} alt=""/>
                                Rastreador
                            </li>
                        </ul>
                        <ButtonCta>Mais sobre</ButtonCta>
                    </div>      
                </div>
            </div>
            <span className={styles.pages}>1 2 3 4</span>
        </main>
    </>
  )
}

export default Bicicletas
