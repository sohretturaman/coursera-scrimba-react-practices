/** @format */

import React from "react";
import troll from "../images/troll-face.png";
import styles from './jokes.module.css'
const Header = () => {
  return (
    <nav
   
    className={styles.nav}>
        <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
        <img src={troll} alt="troll face" className={styles.trollFace} />
        <h3>Joke Generator</h3>
        </div>
    
       <div >
          <span> React course - Project 3 </span>
       </div>
    </nav>
  );
};

export default Header;
