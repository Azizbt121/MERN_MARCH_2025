import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/book/getOne/${id}`)
    .then((res) => {
      setBook(res.data);
    })
    .catch((err) => {
      console.log("Failed to fetch book details.",err);
    });
  }, [id]);

  return (
    <div className="det">
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Available:</strong> {book.isAvailable ? "Yes" : "No"}</p>
      <button onClick={() => navigate(`/borrow/${id}`)}>Borrow</button>
    </div>
  );
};

export default BookDetails;