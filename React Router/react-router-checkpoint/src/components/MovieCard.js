import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} />
    <div style={{padding: '15px'}}>
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}/5</p>
      <Link to={`/movie/${movie.id}`}>
        <button className="view-btn">View Details</button>
      </Link>
    </div>
  </div>
);

export default MovieCard;