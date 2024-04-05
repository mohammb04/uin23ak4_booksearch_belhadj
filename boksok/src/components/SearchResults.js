import React from 'react';
import BookCard from './BookCard';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map(book => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default SearchResults;
