import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import WelcomePage from './components/WelcomePage';
import Cards from './components/WhoAmI';
import Trivia from './components/Trivia';
import NavBar from './components/NavBar';


function App(){
  return (
    <div>
    <NavBar />
      
    <Router>
      <WelcomePage path = "/" />
      <Cards path = "whoami" />
      <Trivia path= "trivia" />
    </Router>
  </div>
  );
}


export default App;

