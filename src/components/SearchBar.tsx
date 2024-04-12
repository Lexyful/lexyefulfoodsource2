import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';


interface SearchBarProps {
  handleSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(value.trim());
    setValue('');
  };

  return (
    <div className="search-container">
      <div className="search-inner">
        <input
          type="text"
          id="myInput"
          value={value}
          onChange={onChange}
          placeholder="Search food"
        />
        <Link href="/results"> 
          <button className="search-button" onClick={handleButtonClick}>Search</button>
        </Link>
      </div>
    </div>
  );
};
