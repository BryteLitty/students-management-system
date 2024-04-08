// SearchInput.jsx
import React from 'react';

const SearchInput = ({ searchStudent }) => {
  const handleInputChange = (event) => {
    searchStudent(event.target.value);
  };

  return (
    <div className="mx-auto">
      <form className="w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search Student by Index Number"
          onChange={handleInputChange} 
          className="w-full py-3 border-2 px-5 rounded-3xl my-2"
        />
      </form>
    </div>
  );
};

export default SearchInput;
