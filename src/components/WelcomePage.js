import React from "react"
import styles from "./WelcomePage.module.css";


function WelcomePage(){
    return (
           
            <div className = {styles.WelcomePage}>
           <img src = "./assets/logo.png" alt ="" className={styles.logo}></img>
           <h1 className = {styles.WelcomeHeader}> Welcome to Radhika's personal project </h1>
      
         </div>

         
           
      
    )
}

export default WelcomePage