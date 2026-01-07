import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h1>Movie not found!</h1>;

  return (
    <div className="description-page">
      <button className="back-home" onClick={() => navigate('/')}>← Back to Home</button>
      <h1>{movie.title}</h1>
      <p style={{lineHeight: '1.6', fontSize: '1.1rem'}}>{movie.description}</p>
      <iframe width="100%" height="450" src={movie.trailerLink} title="Trailer" frameBorder="0" allowFullScreen></iframe>
    </div>
  );
};

export default MovieDescription;