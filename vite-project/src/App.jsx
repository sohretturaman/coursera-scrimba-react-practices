import reactLogo from './assets/react-logo.png'
import ReactSwitch from 'react-switch';

import './App.css'
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(true);
  const handleChange = val => {
    setChecked(val)
  }

  function Header(){
    return(
      <div style={{backgroundColor: checked ? 'white' : 'black'}}>
       
         <nav>
         
           <div className='itemWrapper'> 
           <div style={{flexDirection:'row',display:'flex', alignItems:'center' ,color:'blue'}}>
           <img src={reactLogo} className="reactLogo" alt="React logo"  width={50} height={50}/>
            <h2 style={{color:'#3CADCF',marginLeft:'10px'}}>React Facts</h2> </div>
          
            <div style={{marginRight:'20px',display:'flex',flexDirection:'row',justifyItems:'center',alignItems:'center'}}>
              <h3 style={{color:'#3CADCF',marginRight:'10px'}}>Dark Mode</h3>
            <ReactSwitch
        checked={checked}
        onChange={handleChange}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor='#3CADCF'
      />
            </div>
           </div>
         </nav>
      </div>
    )
  }

  function BodyComp (){
    return (
        <div className='container' style={{backgroundColor: checked ? 'white' : 'black'}}>
           <h1 style={{color: checked ? 'black' : 'white'}}>Fun facts about React </h1>
            <ul className='ulWrapper' style={{color: checked ? 'black' : 'white'}}>
               <li>Was first relased in 2013</li>
               <li>Was originally created by Jordan Walke</li>
               <li>Has well over 100K starts on Github</li>
               <li>Is mainted by Facebook</li>
               <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
  }
  return (
    <div style={{backgroundColor: checked ? 'white' : 'black',height:'100vh',width:'100vw'}}>
   <Header/>
  
     
     
        <BodyComp/>
      
    
    </div>
  )
}

export default App
