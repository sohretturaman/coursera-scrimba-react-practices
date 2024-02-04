import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "./jokes.module.css";

const JokeForm = () => {
    const [joke,setJoke] = useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg'
    }); 
   
    const [allJokes , setAllJokes ]=useState([]); 
    
    useEffect (()=>{
         const getMemes =async ()=>{
          await    fetch ('https://api.imgflip.com/get_memes')
              .then((res)=>res.json())
              .then((data) => {
                setAllJokes(data.data.memes)
              })
         }
         getMemes(); 
         
    },[])

    const getRandomImage =()=>{
        console.log('clicked');
        
        const randomIndex = Math.floor(Math.random() * allJokes.length)
        console.log('randomNum',randomIndex);
        const randomImage= allJokes[randomIndex]
        
         setJoke((prevVal)=>({
            ...prevVal,
            randomImage:randomImage?.url
         }))
        
       
         
        
        
    }
  return (
    <div>
      <Header />

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel}>Top text</label>
          <input className={styles.jokeInput}
           value={joke.topText}
           onChange={((e)=>setJoke({...joke,topText:e.target.value}))}
          placeholder="Shut up" />
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel}>Bottom text</label>
          <input className={styles.jokeInput}
          value={joke.bottomText}
          onChange={(e)=>setJoke({...joke,bottomText:e.target.value})}
          placeholder="and take my money" />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <bottom className={styles.imageButton} onClick={getRandomImage} > Get a new Joke image </bottom>
      </div>
{/** bottom result */}
      <div className={styles.bottomContainer}>
        <div className={styles.imageContainer}>
          <img src={joke.randomImage} className={styles.bottomImage} alt="bottom "/>
          <div className={styles.textOverlay}>
            <h3 className={styles.topText}>{joke.topText}</h3>
            <h3 className={styles.bottomText}>{joke.bottomText}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeForm;
