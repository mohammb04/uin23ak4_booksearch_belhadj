import React from 'react';

function SearchResults({ results }) {
  return (
    <div>
      <h2>Søkeresultater</h2>
      <ul>
        {results.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
