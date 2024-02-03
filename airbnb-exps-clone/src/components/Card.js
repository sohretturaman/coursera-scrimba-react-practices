import React from "react";
import star from '../images/star.png'
import styles from './styles.module.css'

const Card = (props) => {
    console.log('props',props);
    const openSpot = props.openSpots === 0 ? "SOLD OUT" : "ONLINE";
    
  return <section className={styles.cardWrapper}>
     <p style={{position:'absolute',backgroundColor:'white',color:'black',padding:5,justifyContent:'flex-start',marginTop:-1}}>
        {openSpot} </p>
      <img src={require(`../images/${props.coverImg}`)} className={styles.cardImage} alt="katie zaferes" />

       <div style={{flexDirection:'row',
       justifyContent:'start',display:'flex'}}>
       
         <img  src={star}  alt="star" style={{marginRight:5}}/> 
         <span style={{marginRight:5}}>{props.stats.rating} </span>
         <span style={{marginRight:5}}>({props.stats.reviewCount})</span>
         <span>{props.location}</span>
       </div>
       <p style={{marginLeft:0,alignSelf:'flex-start'}}>{props.title}</p>
       <span><span style={{ fontWeight:'bold'}}>From ${props.price}</span> /Person</span>
  </section>;
};

export default Card;
