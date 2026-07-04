import { useState } from 'react';
import { channelCategories } from '../data/channels';

const ChannelList = ({ channels, activeChannel, onChannelSelect }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? channels
    : channels.filter(ch => ch.category === activeCategory);

  return (
    <div>
      {/* Category Pills */}
      <div className="category-pills">
        {channelCategories.map(cat => (
          <button
            key={cat}
            id={`cat-${cat.toLowerCase().replace(/\s/g, '-')}`}
            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Channel Grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <p>Tidak ada channel untuk kategori ini</p>
          <p style={{ fontSize: '0.8rem' }}>Muat playlist M3U Anda dari sidebar</p>
        </div>
      ) : (
        <div className="channel-grid">
          {filtered.map(channel => (
            <div
              key={channel.id}
              id={`channel-${channel.id}`}
              className={`channel-card ${activeChannel?.id === channel.id ? 'active' : ''}`}
              onClick={() => onChannelSelect(channel)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onChannelSelect(channel)}
            >
              <div className="channel-logo-wrapper">
                {channel.logo ? (
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="channel-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="channel-logo-placeholder"
                  style={{ display: channel.logo ? 'none' : 'flex' }}
                >
                  {channel.name?.substring(0, 2).toUpperCase()}
                </div>
              </div>
              <span className="channel-name">{channel.name}</span>
              <span className="channel-category">{channel.category}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div className="live-dot" />
                <span style={{ fontSize: '0.65rem', color: '#ff5555', fontWeight: 700 }}>LIVE</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChannelList;
