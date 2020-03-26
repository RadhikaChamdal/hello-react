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

  <Reveal animated='rotate'>
    <Reveal.Content visible>
      <Image circular size='small' src='/assets/Black Box.png' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size='small' src='/assets/Drake .jpeg' />
    </Reveal.Content>
  </Reveal>


  
      <card> </card>
      <Card.Header>Artist/Card.Header>
      <Card.Meta>
        <span className='33 years old'></span>
      </Card.Meta>
      <Card.Description>
        <p>Albums include: Take Care, Scorpion, What a time to be alive</p>
        Born in Canada
      </Card.Description>
      </Card.Header>

 </div>
);
}
export default App;
