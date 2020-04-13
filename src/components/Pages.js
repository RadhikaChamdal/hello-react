import React from 'react';
import {Router} from '@reach/router'
import Trivia from './components/Trivia.js'



function Pages(){
    return (
      <div>
      <Router>
        <Trivia path= '/trivia' />
      </Router>
    </div>
    );
  }
  
  export default Pages