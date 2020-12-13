import React from 'react';
import { animals } from './animals';
import './App.css';

function App() {

  const title = "";
  const background =<img className="background" src="/images/ocean.jpg" alt="ocean" /> 
  let images = [];

  for(const animal in animals){
  images.push(<img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" />);
  }

  const showBackground = true;
  const displayFact = (e) => {
    let selectedAnimal = e.target.alt;
    document.getElementById('fact').innerHTML = animals[selectedAnimal].facts;
  }

  return (
    <div className="App">
      <div>
        <h1>{title ? title : "Click an animal for a fun fact"}</h1>
        {showBackground && background}
        <div onClick={displayFact} className="animals">{images}</div>
        <p id="fact"></p>
    </div>
    </div>
  );
}

export default App;
