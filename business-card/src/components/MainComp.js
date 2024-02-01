import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import styles from './styles.module.css'
import Footer from "./Footer";
const MainComp = () => {
  return <div className={styles.container} >
      <Info/>
       <About/>
       <Interests/>
    
       <footer >
         <Footer/>
       </footer>
  </div>;
};

export default MainComp;
