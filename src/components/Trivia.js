import React from "react";
import axios from "axios";
import styles from "./Trivia.module.css";
import Button from "./Button";


function Counter () {
    const[count, setCount] = React.useState(0);
    
    return(
      <div className = "button">
      <p><b>Your Points:</b> {count}</p>
      <Button content = "Correct" onClick ={()=>{setCount(count+1)}} />
     
      <Button content = "Incorrect" onClick ={()=>{setCount(count-1)}} />
    </div>
    )  
  }

function Trivia() {
    const [questionString, setQuestionString] = React.useState([]);
    const [showAnswer, setShowAnswer] = React.useState(false);
  
    React.useEffect(() => {
      const promise = axios.get(
      "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean"
      );
      promise.then(response => {
        console.log(response.data.results);
        setQuestionString(response.data.results);
      });
    }, []);
    const toggleShowAnswer = () => {
      setShowAnswer(!showAnswer);
    };
  
    const question = questionString.map((result, index) => {
      return (
        <div key={index}>
          <p>{result.question}</p>
          <button onClick={toggleShowAnswer}> Reveal</button>
          {showAnswer}
          {/* <p>{result.correct_answer}</p> */}
        </div>
      );
    });
    
  
    if (questionString) {
      return (
        <div className = {styles.question}>
            <h1 className = {styles.h1}>Music Trivia</h1>
            <h3 className = {styles.h3}>Answer the questions below, for every question you get right click correct!</h3>
           <Counter />
          <p className = {styles.p}>{question}</p>
        </div>
      );
    } else {
      return <p> Waiting for a queston </p>;
    }
  }
  
  
   
export default Trivia