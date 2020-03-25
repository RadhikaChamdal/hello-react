import React from 'react';
import Superhero from './Superhero'
import logo from './logo.svg';
import './App.css';

function App() {
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
  </div>
  );
}


export default App;
