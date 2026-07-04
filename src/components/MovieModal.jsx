import { useState, useRef, useEffect } from 'react';
import { Play, Star, X, Info } from 'lucide-react';
import Player from './Player';

const MovieModal = ({ movie, onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!movie) return null;

  return (
    <div
      id="movie-modal-overlay"
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-label={movie.title}>
        {/* Embedded Player */}
        <div className="modal-player-wrapper">
          <Player source={movie} title={movie.title} />
        </div>

        {/* Movie Details */}
        <div className="modal-body">
          <div className="modal-header">
            <h2 className="modal-title" id="modal-movie-title">{movie.title}</h2>
            <button
              id="btn-close-modal"
              className="modal-close"
              onClick={onClose}
              aria-label="Tutup"
            >
              <X size={16} />
            </button>
          </div>

          <div className="modal-tags">
            <span className="tag">{movie.year}</span>
            <span className="tag">{movie.duration}</span>
            <span className="tag" style={{ background: 'rgba(255,215,0,0.1)', borderColor: 'rgba(255,215,0,0.3)', color: '#ffd700' }}>
              ⭐ {movie.rating}
            </span>
            <span className={`stream-type-badge ${movie.type === 'dash' ? 'dash' : 'hls'}`} style={{ position: 'static', fontSize: '0.7rem' }}>
              {movie.type === 'dash' ? 'MPEG-DASH' : 'HLS'}
            </span>
            <span className="tag" style={{ background: 'rgba(108,99,255,0.1)', borderColor: 'rgba(108,99,255,0.3)', color: 'var(--accent-primary)' }}>
              {movie.quality}
            </span>
            {movie.genre?.map(g => (
              <span key={g} className="tag">{g}</span>
            ))}
          </div>

          <p className="modal-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
