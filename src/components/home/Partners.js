import React from 'react'
import styles from './Partners.module.css'
import Layout from '../container/Layout'
import Caravan from '../../icons/caravan.png'
import Ranek from '../../icons/ranek.png'
import Handel from '../../icons/handel.png'
import Dogs from '../../icons/dogs.png'
import Lescone from '../../icons/lescone.png'
import Flexblog from '../../icons/flexblog.png'
import Wildbeast from '../../icons/wildbeast.png'
import Surfbot from '../../icons/surfbot.png'

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
        <Layout>
            <div>
                <h1>nossos parceiros<span>.</span></h1>
                <ul>
                    <li>
                        <img src={Caravan} alt="Caravan"/>
                    </li>
                    <li>
                        <img src={Ranek} alt="Ranek"/>
                    </li>
                    <li>
                        <img src={Handel} alt="Handel"/>
                    </li>
                    <li>
                        <img src={Dogs} alt="Dogs"/>
                    </li>
                    <li>
                        <img src={Lescone} alt="Lescone"/>
                    </li>
                    <li>
                        <img src={Flexblog} alt="Flexblog"/>
                    </li>
                    <li>
                        <img src={Wildbeast} alt="Wildbeast"/>
                    </li>
                    <li>
                        <img src={Surfbot} alt="Surfbot"/>
                    </li>
                </ul>
            </div>
        </Layout>
    </section>
  )
}

export default Partners