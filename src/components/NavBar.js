import React from "react";
import {Link} from "@reach/router";


function NavBar(){
    return(
        <div>
            <Link to= "/"> Home </Link>
            <hr/>
            <Link to= "whoami"> Who Am I </Link>
            <hr/>
            <Link to= "trivia"> Trivia </Link>

                
        </div>
    )
}

export default NavBar
