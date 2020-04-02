import React from "react";
import Info from './Info.js';


function Character(props) {
    return(
      <Info imagePath = {props.imagePath} born = {props.born} nickname = {props.nickname} albums = {props.albums} />
    )
  }
  
  export default Character 
