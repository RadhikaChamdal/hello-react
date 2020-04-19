import React from "react";
import axios from "axios";
import styles from "./Trivia.module.css";

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
          <p>{question}</p>
        </div>
      );
    } else {
      return <p> Waiting for a queston </p>;
    }
  }
    
   
export default Trivia