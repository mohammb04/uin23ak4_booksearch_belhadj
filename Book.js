import React from 'react';

function Book({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Forfatter: {book.author_name}</p>
      <p>Publiseringsår: {book.first_publish_year}</p>
      <p>Gjennomsnittlig vurdering: {book.average_rating}</p>
      <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">Amazon-søk</a>
    </div>
  );
}

export default Book;
