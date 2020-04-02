import React from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/Character.js';


function App() {
  return(
  
    <div className="App">
      <h1>Who Am I?</h1>
      <h2> Take a guess if you want</h2>
      <h3>Hover over the space to reveal the artist</h3>
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
         <Character 
          imagePath='/assets/gunna .jpg' 
          born = 'Georgia' 
          nickname = 'Wunna' 
          albums = 'Drip or Drown, Drip too hard'
        />
      </div>
      <div className = "pop">
      <Character 
          imagePath='/assets/justin.jpg' 
          born = 'Canada' 
          nickname = 'JB' 
          albums = 'Changes, Purpose, Strong'
        />
        
      <Character 
          imagePath='/assets/weeknd.jpg' 
          born = 'Toronto, Canada' 
          nickname = '' 
          albums = 'After Hours, Beauty Behind the Madness'
        />
        
        <Character 
          imagePath='/assets/billie.jpg' 
          born = 'Los Angeles, California' 
          nickname = '' 
          albums = 'When We All Fall Asleep, Where Do We Go?, '
        />

        <Character 
          imagePath='/assets/dua.jpg' 
          born = 'London, England' 
          nickname = '' 
          albums = 'Future Nostalgia, Nostalgia deluxe'
        />



      </div>

     
 </div>
  )
}

export default App;
