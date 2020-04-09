import React from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/Character.js';
import { SearchResults } from 'semantic-ui-react';
import axios from 'axios'
export default App


function Counter () {
  const[count, setCount] = React.useState(0);
  
  return(
    <div className = "button">
    <p><b>Your Points:</b> {count}</p>
    <button onClick = {()=>{setCount(count+1)}}>
    Correct!
    </button>

    <button onClick ={()=>{setCount(count-1)}}>
    Incorrect!
    </button>
  </div>
  ) 
function MusicApi() {
  const [questionString, setQuestionString] = React.useState();
  const [AnswerState, setAnswerState] = React.useState();
  console.log(questionString);
  React.useEffect(() => {
    const promise = axios.get(
      "https://opentdb.com/api.php?amount=8&category=12&difficulty=medium&type=boolean"
    );
    promise.then(response => {
      console.log("object", response.data.results[4]);
      console.log("ques", response.data.results[4].question);
      setQuestionString(response.data.results[4].question);
    });
    promise.then(response => {
      console.log("answer:", response.data.results[4].correct_answer);
      setAnswerState(response.data.results[4].correct_answer);
    });
  }, []);

  if (questionString) {
    return (
      <>
        <p>{questionString}</p>
        <p>{AnswerState}</p>
      </>
    );
  } else {
    return <p> Loading question </p>;
  }
         
}      
}

function App() {
  return(
  
    <div className="App">
      <h1>Who Am I?</h1>
      <h2> Take a guess if you want</h2>
      <h2>Hover over the space to reveal the artist</h2>
      <Counter />
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
      <br/>
      <br/>
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
        <Character 
          imagePath='/assets/post malone.jpg' 
          born = 'New York, U.S.' 
          nickname = 'posty' 
          albums = "Hollywood's Bleeding, Stoney"
        />
         <Character 
          imagePath='/assets/ed.jpg' 
          born = 'Suffolk, England' 
          nickname = 'teddy' 
          albums = "divide, x"
        />
         </div>
         
         
    
         
         
         
         
         
         
         
         
         
         
         
         </div>
  )
}