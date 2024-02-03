import React from "react";
import  hero from  '../images/photo-grid.png';
import styles from './styles.module.css';
const TopComp = () => {
  return <section
   className={styles.topWrapper}>
     <img alt="hero" src={hero} className={styles.heroImage} />
     <div className={styles.topTextWrapper}>
         <span className={styles.mainHeader}>Online  Experiences</span>
         <p className={styles.text}>
         Join unique interactive activities led by 
         one-of-a-kind hosts—all without leaving home.

         </p>
     </div>
  </section>;
};

export default TopComp;
