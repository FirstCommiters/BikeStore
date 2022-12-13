import React from 'react'
import Layout from './Layout'
import iconDeco from '../icons/introDeco.svg'
import styles from '../styles/Intro.module.css'

const Intro = ({ text, title }) => {
    return (
        <div className={styles.intro}>
            <Layout>
                <div className={styles.introGrid}>
                    <div>
                        <p>{text}</p>
                        <h1>{title}<span>.</span></h1>
                    </div>
                    <img src={iconDeco} alt="Decoração da intro" />
                </div>
            </Layout>
        </div>
    )
}

export default Intro