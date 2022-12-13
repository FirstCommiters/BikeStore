import React from 'react'
import styles from '../../styles/form/Input.module.css'

const Input = ({type ,placeholder, style, ...props}) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} {...props}/>
  )
}

export default Input