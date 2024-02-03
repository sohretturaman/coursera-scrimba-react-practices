import React from 'react'
import logo from '../images/airbnb-logo.png'
import styles from './styles.module.css'

const Header = () => {
  return (
    <nav className={styles.containerH}>
       <img alt='logo' src={logo}  style={{ width: 82, height: 25}}  />
      
    </nav>
  )
}

export default Header
