

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import "./BookDetails.css";
const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    axios.get(`https://book-review-platforms.onrender.com/reviews/${id}`).then((res) => setReviews(res.data));
  };

  useEffect(() => {
    axios.get(`https://book-review-platforms.onrender.com/books/${id}`).then((res) => setBook(res.data));
    fetchReviews();
  }, [id]);

  const renderStars = (rating) => {
    const maxStars = 5;
    const filledStars = "★".repeat(rating || 0);
    const emptyStars = "☆".repeat(maxStars - (rating || 0));
    return <span style={{ color: "gold", fontSize: "18px" }}>{filledStars}{emptyStars}</span>;
  };

  return (
    <div className="book-details-container-section">
    <div className="book-details-container">
      <div className="book-card-detail">
        {/* Book details here */}
        <img
          src={book.image || "https://via.placeholder.com/200x300?text=No+Image"}
          alt={book.title}
          className="book-detail-image"
        />
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <p><b>Author:</b> {book.author}</p>
          <p>{book.description}</p>
        </div>
<h3>Reviews</h3>
        <div className="reviews-section" style={{ maxHeight: "250px", overflowY: "auto", border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
          
          {reviews.length > 0 ? (
            reviews.map((r, i) => (
              <div key={i} className="review" style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <p><b>{r.reviewerName}:</b></p>
                <p>{r.comment}</p>
                <p>Rating: {renderStars(r.rating)}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        <ReviewForm bookId={id} onReviewSubmitted={fetchReviews} />
      </div>
    </div>
    </div>
  );
};


export default BookDetails;
