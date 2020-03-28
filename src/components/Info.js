import React from "react";
import { Icon, Label, Image, Card,Reveal} from 'semantic-ui-react'

function Info(props) {
    return(
     
        <div className = 'character'>
          <div className = "img-fade"> 
          <Reveal animated='fade'>
          <Reveal.Content visible>
          <Image size='small' src='/assets/black.jpg' />
          </Reveal.Content>
          <Reveal.Content hidden>
          <Image size='small' src={props.imagePath} />
          </Reveal.Content>
          </Reveal>
          </div>
    
    
          <div class ="card-facts">
          <h4>Facts about the Artist:</h4>
          <Card.Description>
            <div class='facts'>
            <p>Born in <b><em>{props.born}</em></b></p>  
            <p>Known as <b><em>{props.nickname}</em></b></p>
            <p>Albums: <b><em>{props.albums}</em></b></p>
            </div>
            </Card.Description>
            </div>
            <div class ="card-facts">
            </div>
            
            </div>
      )
  }

  export default Info
