import React from 'react';
// import Potato from './Potato';

function Food({ fav }) {
  return(
    <h3>I Like {fav}</h3>
  );
}

function App() {
  return (
    <div className="App">
      HHelllo
      <Food fav="Kimchi" />
      <Food fav="chicken" />
      <Food fav="bloodborne" />
    </div>
  );
}

export default App;
