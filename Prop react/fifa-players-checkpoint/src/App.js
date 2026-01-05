import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1 style={{ textAlign: 'center', marginTop: '30px', color: '#2c3e50' }}> FIFA World Stars </h1>
      <PlayersList />
    </div>
  );
}

export default App;
