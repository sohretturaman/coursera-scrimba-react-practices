import React from 'react'
import Card from './Card'
import data from '../data'

const ListContainer = () => {
    const Data  = data; 
   const cards = Data.map((item)=>(
    <Card key={item.id} {...item}/>
   ))
    
   
  return (
    <div>
    
        <section style={{flexDirection:'row' , marginTop:20,display:'flex',width:'100%',alignSelf:'center',justifyContent:'center'}}>
        {cards}
        </section>
         <footer>
             <div style={{display:'flex',justifyContent:'center',backgroundColor:'gray',marginTop:100}}>
                 <p>Copyright 2024. All Rights Reserved</p>
             </div>
         </footer>
    </div>
  )
}

export default ListContainer
