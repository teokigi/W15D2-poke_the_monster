import React from 'react';
import './App.css';
import PokeBox from './containers/PokeBox.js';

function App() {
  return (
      <div className="dex_body">
        <div className="empty_header">
        </div>
        <PokeBox />

      </div>
  );
}
// https://pokeapi.co/api/v2/pokemon?limit=100
export default App;
