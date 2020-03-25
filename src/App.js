import React from 'react';
import Superhero from './Superhero'
import logo from './logo.svg';
import './App.css';
import { Icon, Label, Image, Card} from 'semantic-ui-react'

function App() {
  console.log('radhika is alright uno')
  return (
    <div className="App">
      <h1>Superhero</h1>
      <Superhero name = "Spiderman"
      strength = "Shooting Webs"
      weaknesses = "Women"
      enemy = "Mysterio"/>
      <br></br>
      <Superhero name = "Batman"
      strength = "Strength"
      weaknesses = "Trauma"
      enemy = "Joker"/>
       <Label>
    <Icon name='mail' /> 23
  </Label>
  <Card>
    <Image src= '../assets/spiderman.png'wrapped ui={false} />
    <Card.Content>
      <Card.Header>Spiderman</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 1962</span>
      </Card.Meta>
      <Card.Description>
        SpiderMan lives in queens.
        He loves red heads 
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Superhero
      </a>
    </Card.Content>
  </Card>
 
  
  </div>
  );
}


export default App;
