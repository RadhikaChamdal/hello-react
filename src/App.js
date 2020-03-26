import React from 'react';
import Superhero from './Superhero'
import logo from './logo.svg';
import './App.css';
import { Icon, Label, Image, Card,Reveal} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <h1>Guess Who</h1>
      <h2> Your Character is.....</h2>

    <Character imagePath='/assets/Drake .jpeg' />
    <Character imagePath='/assets/spiderman .png' />
    <Character />
      

 </div>
);
}


function Character(props) {
  return (
    <div>
      <Reveal animated='rotate'>
      <Reveal.Content visible>
      <Image size='small' src='/assets/Black Box.png' />
      </Reveal.Content>
      <Reveal.Content hidden>
      <Image size='small' src={props.imagePath} />
      </Reveal.Content>
      </Reveal>


      <div class ="card-facts">
      <Card.Header>Facts about the Artist</Card.Header>
      <Card.Meta>
        <span className='cards'></span>
      </Card.Meta>
      <Card.Description>
        
        <ul class='facts'>
        <li>Born in Canada</li>
        <br></br>
        <li>Known as ChampagnePapi</li>
        <br></br>
        <li>Albums include: Take Care, Scorpion, What a time to be alive</li>
        </ul>
        </Card.Description>
        </div>
  </div>
  )
}

export default App;
