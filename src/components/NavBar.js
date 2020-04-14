import React from "react";
import {Link} from "@reach/router";
import styles from "./NavBar.module.css";


function NavBar(){
    return(
        <div className = {styles.Nav}>
            <ul className = "nav-links">
            
            <Link to= "/"> <li> Home </li> </Link>
            
            
            <hr/>
            <Link to= "whoami"> <li>Who Am I </li> </Link>
           
            <hr/>
            <Link to= "trivia">  <li>Trivia</li> </Link>
           
        </ul>
                
        </div>
    )
}

export default NavBar
