import React from "react";
import {Link} from "@reach/router";
import styles from "./NavBar.module.css";


function NavBar(){
    return(
        <div className = {styles.Nav}>
            <ul className = "nav-links">
            
            <Link to= "/"> <li><b>Home</b> </li> </Link>
            
            
            <hr/>
            <Link to= "whoami"> <li><b> Who Am I </b> </li> </Link>
           
            <hr/>
            <Link to= "trivia">  <li><b>Trivia</b></li> </Link>
           
        </ul>
                
        </div>
    )
}

export default NavBar
