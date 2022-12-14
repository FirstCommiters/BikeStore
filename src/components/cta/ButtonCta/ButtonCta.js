import React from 'react'
import styles from './ButtonCta.module.css'

const ButtonCta = ({children}) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default ButtonCta