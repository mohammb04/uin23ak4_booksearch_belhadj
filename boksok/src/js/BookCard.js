import React from 'react';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Forfatter: {book.author_name}</p>
      <p>Første år publisert: {book.first_publish_year}</p>
      <p>Gjennomsnittlig rating: {book.average_rating}</p>
      {book.cover_i && (
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Bokomslag" />
      )}
      <a href={`https://www.amazon.com/s?k=${book.title}`} target="_blank" rel="noopener noreferrer">Søk på Amazon</a>
    </div>
  );
}

export default BookCard;
