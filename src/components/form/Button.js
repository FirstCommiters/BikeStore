import React from 'react'
import styles from '../../styles/form/Button.module.css'

const Button = ({children, disabled}) => {
  return (
    <button disabled={disabled} className={styles.button}>{children}</button>
  )
}

export default Button