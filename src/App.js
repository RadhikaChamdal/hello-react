import React from 'react';
import logo from './logo.svg';
import './App.css';




function App(){
  return (
    <div>
    <Router>
      <WelcomePage path = "/"/>
      <WhoAmI path = "whoami"/>
      <Trivia path= '/trivia' />
      
    </Router>
  </div>
  );
}


export default App

