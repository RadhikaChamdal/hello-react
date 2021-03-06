import React from 'react'
import Attributes from './Attribute'

function Superhero(props) {
    return(
      <div>
        <Attributes title = "Superhero:" value = {props.name}/>
        <Attributes title = "Strength:" value = {props.strength}/>
        <Attributes title = "Weaknesses:" value = {props.weaknesses}/>
        <Attributes title = ":" value = {props.value}/>

        <p><b>Superhero:</b>{props.name}</p>
        <p><b>Strength:</b>{props.strength}</p>
        <p><b>Weaknesses:</b>{props.weaknesses}</p>
        <p><b>Enemy:</b> {props.enemy}</p>
      </div>
    )
  }

  export default Superhero