import { useState } from 'react';
import { Tv, Film, Home, Search, List, X, ChevronRight, Radio, Settings } from 'lucide-react';

const Sidebar = ({ currentView, onNavigate, playlistUrl, onPlaylistLoad }) => {
  const [inputUrl, setInputUrl] = useState('');

  const navItems = [
    { id: 'home', icon: Home, label: 'Beranda' },
    { id: 'live', icon: Radio, label: 'Live TV' },
    { id: 'movies', icon: Film, label: 'Film & VOD' },
    { id: 'search', icon: Search, label: 'Cari' },
    { id: 'admin', icon: Settings, label: 'Admin Panel' },
  ];

  const handleLoad = () => {
    if (inputUrl.trim()) {
      onPlaylistLoad(inputUrl.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLoad();
  };

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <Tv size={18} color="white" />
        </div>
        <span className="sidebar-logo-text">StreamVault</span>
      </div>

      {/* Navigation */}
      <span className="sidebar-section-label">Menu</span>
      <nav className="sidebar-nav">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            id={`nav-${id}`}
            className={`nav-item ${currentView === id ? 'active' : ''}`}
            onClick={() => onNavigate(id)}
            title={label}
          >
            <Icon size={20} className="nav-icon" />
            <span>{label}</span>
            {currentView === id && (
              <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
            )}
          </button>
        ))}
      </nav>

      {/* Playlist Loader */}
      <div className="sidebar-footer">
        <div className="playlist-input-section">
          <span className="playlist-input-label">
            <List size={10} style={{ display: 'inline', marginRight: 4 }} />
            Playlist M3U
          </span>
          <div className="playlist-input-wrapper">
            <input
              id="playlist-url-input"
              type="url"
              className="playlist-input"
              placeholder="https://...playlist.m3u"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              id="btn-load-playlist"
              className="btn-load"
              onClick={handleLoad}
              title="Muat playlist"
            >
              Load
            </button>
          </div>
          {playlistUrl && (
            <p style={{ fontSize: '0.65rem', color: 'var(--accent-green)', marginTop: 4 }}>
              ✓ Playlist dimuat
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
