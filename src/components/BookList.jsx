


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

const user = {
  name: localStorage.getItem("userName") || "Guest",
  email: localStorage.getItem("userEmail") || ""
};
  useEffect(() => {
    axios.get("https://book-review-platforms.onrender.com/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Get unique authors for filter dropdown
  const authors = [...new Set(books.map(book => book.author))];

  // Filter books based on search and selected author
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAuthor = selectedAuthor ? book.author === selectedAuthor : true;
    return matchesSearch && matchesAuthor;
  });

  return (
    <>
      <Header user={user} />
      <div className="book-list-container">
        <h2>📚 All Books</h2>

        {/* Search and Filter Section */}
        <div className="search-filter-bar">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="filter-dropdown"
          >
            <option value="">All Authors</option>
            {authors.map(author => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>
        </div>

        {/* Book Grid */}
        <div className="book-grid">
          {filteredBooks.map(book => (
            <Link to={`/books/${book._id}`} key={book._id} className="book-card">
              <img
                src={book.image}
                alt={book.title}
                className="book-image"
                onError={(e) => e.target.src = "https://via.placeholder.com/200x300?text=No+Image"}
              />
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
