import React, { useState } from "react";
import Die from "./components/Die";

const App = () => {
 const [dies,setDies] =useState([]); 
 

    const allNewDice =()=>{
        const randomNumsList=[];
        for(let i =0; i<10; i ++){
           let newRandomNum = Math.floor(Math.random()*6)+1
         
           randomNumsList.push(newRandomNum);
           
        }
      
      setDies(randomNumsList)
    }


    const diesMap =dies.map((number)=>(
        <Die value={number} />
     ))

  return (
    <main>
        <div>
             <h1>Tenzier</h1>
             <p style={{width:'90%',fontWeight:500}}>
             Roll until all dice are the same. 
             Click each die to freeze it at its current value between rolls.
             </p>
        </div>
         <div className="dieGrid">
                  {diesMap}
         </div>
         <div>
             <button className="button" onClick={allNewDice}>Click</button>
         </div>
        
    </main>
  )
};

export default App;
