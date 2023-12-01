import React from "react";
import styles from './MovieCard.css'
import { useNavigate } from 'react-router-dom';

export function MovieCard ({ movies }) {
  const navigate = useNavigate();

  if (!movies || !Array.isArray(movies)) {
    return <p>Loading...</p>; // Puedes personalizar este mensaje o la representación según sea necesario
  }

  return (
    <div>
      <div className={styles.CardGrid}>
        {movies.map((movie) => {
          const { id, title, image, running_time } = movie;
          return (
            <div onClick={() => navigate(`/films/${id}`)} className='movieCard' key={id}>
              <div>
                <img className='imageCard' src={image} alt={`${title} poster`} />
              </div>
              <h2>{title}</h2>
              <h3>{running_time}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
