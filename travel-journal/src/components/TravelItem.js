/** @format */

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./travel.module.css";
const TravelItem = (props) => {
  return (
    <section className={styles.itemContainer}>
      <div className={styles.imageWrapper}>
        {props.imgurl && <img className={styles.image} src={props.imgurl} />}
      
      </div>
      <div style={{ margin: "5px" }}>
        <div className={styles.location}>
          <FaMapMarkerAlt color="#F55A5A" />
          <span style={{ marginRight: 10 }}>{props.location}</span>
          <p style={{ textDecorationLine: "underline", color: "gray" }}>
            View on Google Maps
          </p>
        </div>
        <div style={{ alignContent:'flex-start', display:'flex',flexDirection:'column'}}>
          <div className={styles.title}>{props.title}</div>
          <span className={styles.date}>{props.date}</span>
          <p className={styles.textBox}>
             {props.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelItem;
