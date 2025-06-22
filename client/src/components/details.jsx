import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const BookDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/book/getOne/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch book");
        return res.json();
      })
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>No book data found.</p>;

  return (
    <div className="det">
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Available:</strong> {book.isAvailable ? "Yes" : "No"}</p>
      <button onClick={() => navigate("/Borrow")}>Borrow</button>
    </div>
  );
};
