import React from 'react'
import { GiWorld } from "react-icons/gi";
import styles from './header.module.css'
const Header = () => {
  return (
    <nav >
         <GiWorld color='white' size={20} />
          <span className={styles.text}> My travel journal.</span>
    </nav>
  )
}

export default Header
