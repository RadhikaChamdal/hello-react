import React from 'react';
import Superhero from './Superhero'
import logo from './logo.svg';
import './App.css';
import Character from './components/Character.js'

function App() {
  return(
  
    <div className="App">
      <h1>Who Am I?</h1>
      <h2> Take a guess if you want</h2>
      <div className = 'whole'>
        <Character 
          imagePath='/assets/Drake .jpeg' 
          born = 'Canada' 
          nickname = 'ChampagnePapi' 
          albums = 'Take Care, Scorpion, What a time to be alive'
        />
        <Character 
          imagePath='/assets/future.jpg' 
          born = 'Atlanta, Georgia' 
          nickname = 'Hndrxx' 
          albums = 'DS2, Super Slimey, EVOL'
        />
        <Character 
          imagePath='/assets/chris.jpg' 
          born = 'Virginia, US' 
          nickname = 'Breezy' 
          albums = 'X, Indigo, F.A.M.E., Royalty, Exclusive'
        />
        <Character 
          imagePath='/assets/party.jpg' 
          born = 'Ontario, Canada' 
          nickname = 'PND' 
          albums = 'Partymobile, PartyNextDoor 3, PartyNextDoor 3'
        />
        <Character 
          imagePath='/assets/travis.jpg' 
          born = 'Houston, Texas' 
          nickname = 'La Flame' 
          albums = 'Rodeo, Astroworld, BITTSM'
        />
      </div>
      <h3>Hover over the space to reveal the artist</h3>
 </div>
  )
}

export default App;
