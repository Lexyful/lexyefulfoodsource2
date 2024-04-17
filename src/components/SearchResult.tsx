// SearchResult.tsx
import React from 'react';

interface SearchResultProps {
  id: number;
  label: string;
  image: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({ id, label, image }) => {
  return (
    <div className="search-result">
      <img src={image} alt={label} className="search-result-image" />
      <div className="search-result-details">
        <h3>{label}</h3>
        <p>ID: {id}</p>
        {/* Add any other details you want to display */}
      </div>
    </div>
  );
};
