import React from 'react'
import Dots from './Dots';

const Die = (props) => {
  console.log();
  
    
    const styles = {backgroundColor:props.isheld ? '#59E391' : 'white'}
  return (
    <div className='dieWrapper' style={styles} onClick={()=>props.holdDice(props.id)} >
       {/*  <h1>{props.value}</h1> */}
        <Dots number={props.value} />
    </div>
  )
}

export default Die
