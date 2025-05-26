

import React, { useState } from "react";
import axios from "axios";
import "./ReviewForm.css"; // Make sure to import the CSS file

const ReviewForm = ({ bookId, onReviewSubmitted }) => {
  const [reviewerName, setReviewerName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewerName.trim() || !comment.trim()) return;

    try {
      await axios.post("https://book-review-platforms.onrender.com/reviews", {
        bookId,
        reviewerName,
        comment,
        rating,
      });

      setReviewerName("");
      setComment("");
      setRating(0);

      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
    } catch (err) {
      console.error("Error submitting review", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h4>Leave a Review</h4>

      <input
        type="text"
        placeholder="Your Name"
        value={reviewerName}
        onChange={(e) => setReviewerName(e.target.value)}
        required
      />

      <textarea
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
  <p>Give rating out of 5</p>
      <input
        type="number"
        placeholder="Rating (0-5)"
        value={rating}
        min="0"
        max="5"
        onChange={(e) => setRating(Number(e.target.value))}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
