import React from 'react'
import styles from './LinkCta.module.css'
import { NavLink } from 'react-router-dom'

const LinkCta = ({children}) => {
  return (
    <NavLink className={styles.linkCta}>{children}</NavLink>
  )
}

export default LinkCta