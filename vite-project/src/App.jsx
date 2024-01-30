import reactLogo from './assets/react-logo.png'

import './App.css'

function App() {
 
  function Header(){
    return(
      <div>
       
         <nav>
         
           <div className='itemWrapper'> 
           <div style={{flexDirection:'row',display:'flex', alignItems:'center' ,color:'blue'}}>
           <img src={reactLogo} className="reactLogo" alt="React logo"  width={50} height={50}/>
            <h3>React Facts</h3> </div>
          
           <ul>
               <li>
                 React Course
               </li>
               <li>
                 Project-1
               </li>
            </ul>
           </div>
         </nav>
      </div>
    )
  }

  function BodyComp (){
    return (
        <div className='container'>
           <h1>Fun facts about React </h1>
            <ul className='ulWrapper'>
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
    <>
   <Header/>
  
     
     
        <BodyComp/>
     
      
    
    </>
  )
}

export default App
