import { useState, useEffect } from 'react';
import './App.css';

function BookSearch({ query }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (!query.trim()) return;
    setLoading(true);
    fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        const bookData = data.docs.map((doc) => ({
          title: doc.title,
          author: doc.author_name,
          cover: doc.cover_i
            ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
            : 'https://via.placeholder.com/150x200?text=No+Cover',
        }));
        setBooks(bookData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="books">
      {books.map((book, i) => (
        <div key={i} className="org">
          <img src={book.cover} />
          <h4>
            <span className="lef">Author: </span> {book.author}
          </h4>
          <p>
            <span className="lef">Title: </span>
            {book.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="main">
      <h1>search books</h1>
      <input
        type="text"
        placeholder="search books here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <BookSearch query={search} />
    </div>
  );
}
