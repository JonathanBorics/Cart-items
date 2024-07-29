import React, { useState } from "react";
import data from "../Data.json"; // Helyes útvonal a src mappán belüli Data.json fájlhoz
import SearchBar from "./SearchBar";

const BookList = () => {
  const [books, setBooks] = useState(data); // Állapotkezelés a könyvekhez
  const [searchQuery, setSearchQuery] = useState("");
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    country: "",
    language: "",
    pages: "",
    year: "",
    link: "",
    imageLink: "",
  });

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (title) => {
    const updatedBooks = books.filter((book) => book.title !== title);
    setBooks(updatedBooks);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({
      title: "",
      author: "",
      country: "",
      language: "",
      pages: "",
      year: "",
      link: "",
      imageLink: "",
    });
  };

  return (
    <div>
      <h1>Book List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>Country:</strong> {book.country}
            </p>
            <p>
              <strong>Language:</strong> {book.language}
            </p>
            <p>
              <strong>Pages:</strong> {book.pages}
            </p>
            <p>
              <strong>Year:</strong> {book.year}
            </p>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
            <button onClick={() => handleDelete(book.title)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add a new book</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={newBook.country}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="language"
          placeholder="Language"
          value={newBook.language}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pages"
          placeholder="Pages"
          value={newBook.pages}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={newBook.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="link"
          placeholder="Link"
          value={newBook.link}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="imageLink"
          placeholder="Image Link"
          value={newBook.imageLink}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
};

export default BookList;
