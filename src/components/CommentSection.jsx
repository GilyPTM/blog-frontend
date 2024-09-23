import React, { useState, useEffect } from "react";
import axios from "axios";
import configData from "../config.json";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funcția de încărcare a articolelor de la API
  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(
        `${configData.API_BASE_URL}/comments/${postId}`
      );
      setComments(response.data["data"]);
      setLoading(false);
    } catch (error) {
      setError("Nu am putut încărca articolele.");
      setLoading(false);
    }
  };
  console.log(comments);
  // console.log(postId);

  // Fetch posts on component mount
  useEffect(() => {
    fetchComments(postId);
    console.log(postId);
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    try {
      await axios.post(`${configData.API_BASE_URL}/comments/`, {
        user_id: user.id, // Înlocuiți cu ID-ul utilizatorului autentificat
        text: newComment,
        post_id: postId,
      });
      setNewComment("");
      fetchComments(postId);
    } catch (error) {
      console.error("Eroare la adăugarea comentariului:", error);
    }
  };

  return (
    <div className="comment-section">
      <h3>Comentarii</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <p>
              {comment.nume} {comment.prenume}
            </p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Adaugă un comentariu..."
          required
        />
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
};

export default CommentSection;
