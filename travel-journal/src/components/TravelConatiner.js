import React from 'react'
import TravelItem from './TravelItem'
import Data from '../Data'

const TravelConatiner = () => {
 

const places = Data.map ((item)=>{
    return (
         <TravelItem
          key={item.id}
          {...item}
         />
    )
})
   
  return (
    <div style={{padding:'10px'}}>
       {places}
    </div>
  )
}

export default TravelConatiner
