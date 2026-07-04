import { useRef } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = 'Cari channel atau film...' }) => {
  const inputRef = useRef(null);

  return (
    <div className="search-bar" onClick={() => inputRef.current?.focus()}>
      <Search size={15} className="search-icon" />
      <input
        id="global-search-input"
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          id="btn-clear-search"
          onClick={(e) => { e.stopPropagation(); onChange(''); }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', padding: 0 }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
