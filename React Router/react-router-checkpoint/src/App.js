import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { moviesData } from './movies';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';
import './App.css';

function App() {
  const [movies] = useState(moviesData);

  return (
    <Router>
      <div className="App">
        <h1 style={{fontSize: '3rem', marginTop: '30px'}}>🎬 TUNISIA MOVIES</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;