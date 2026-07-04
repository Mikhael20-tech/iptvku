import { useState } from 'react';
import { Play, Star, Film } from 'lucide-react';
import { movieGenres } from '../data/movies';

const MediaGrid = ({ movies, onMovieSelect }) => {
  const [activeGenre, setActiveGenre] = useState('Semua');

  const filtered = activeGenre === 'Semua'
    ? movies
    : movies.filter(m => m.genre?.includes(activeGenre));

  return (
    <div>
      {/* Genre Filter Pills */}
      <div className="category-pills">
        {movieGenres.map(genre => (
          <button
            key={genre}
            id={`genre-${genre.toLowerCase().replace(/\s/g, '-')}`}
            className={`category-pill ${activeGenre === genre ? 'active' : ''}`}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <Film size={48} />
          <p>Tidak ada film untuk genre ini</p>
        </div>
      ) : (
        <div className="movie-grid">
          {filtered.map(movie => (
            <div
              key={movie.id}
              id={`movie-${movie.id}`}
              className="movie-card"
              onClick={() => onMovieSelect(movie)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onMovieSelect(movie)}
            >
              <div className="movie-poster-wrapper">
                {/* Format badge */}
                <span className="movie-badge">
                  {movie.type === 'dash' ? 'DASH' : 'HLS'}
                </span>
                <span className="movie-quality-badge">{movie.quality || 'HD'}</span>

                {/* Poster */}
                {movie.poster ? (
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-poster"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                <div
                  className="movie-poster-placeholder"
                  style={{ display: movie.poster ? 'none' : 'flex' }}
                >
                  <Film size={32} />
                  <span style={{ fontSize: '0.75rem', textAlign: 'center', padding: '0 8px' }}>
                    {movie.title}
                  </span>
                </div>

                {/* Overlay with play button */}
                <div className="movie-overlay" />
                <div className="play-button-overlay">
                  <Play size={18} fill="currentColor" />
                </div>
              </div>

              {/* Movie info below poster */}
              <div className="movie-info">
                <p className="movie-title">{movie.title}</p>
                <div className="movie-meta">
                  <span className="movie-rating">
                    <Star size={10} fill="currentColor" />
                    {movie.rating}
                  </span>
                  <span>{movie.year}</span>
                  <span>{movie.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaGrid;
