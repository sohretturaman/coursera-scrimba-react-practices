import React from 'react'

const Die = ({value}) => {
    
    const styles = {backgroundColor:'#59E391'}
  return (
    <div className='dieWrapper' style={styles}>
        <h1>{value}</h1>
    </div>
  )
}

export default Die
