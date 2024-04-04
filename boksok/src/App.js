import React, { useState } from 'react';
import './App.scss';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=james+bond&title=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Noe gikk galt ved henting av data.');
      }
      const data = await response.json();
      setSearchResults(data.docs);
    } catch (error) {
      console.error('Feil ved henting av data:', error.message);
    }
  };

  const handleSearch = async () => {
    try {
      if (searchTerm.length >= 3) {
        await searchBooks();
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Feil ved søk:', error.message);
    }
  };  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Bok Søk</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Søk etter bøker..."
        />
        <button onClick={handleSearch}>Søk</button>
      </header>
      <main>
        <div className="book-list">
          {searchResults.length > 0 ? (
            searchResults
              // Fjern duplikatbøker ved å filtrere unike titler
              .filter((book, index, self) =>
                index === self.findIndex((b) => (
                  b.title === book.title
                ))
              )
              .map(book => (
                <div key={book.key} className="book">
                  <h2>{book.title}</h2>
                  <p>Forfatter: {book.author_name}</p>
                  <p>Første år publisert: {book.first_publish_year}</p>
                  <p>Gjennomsnittlig rating: {book.average_rating}</p>
                  <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">Søk på Amazon</a>
                </div>
              ))
          ) : (
            <p>Ingen søkeresultater funnet</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
