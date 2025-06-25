import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Borrow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/book/getOne/${id}`)
    .then((res) => {
      setBook(res.data);
    })
    .catch((err) => {
      console.log("Failed to load book details :",err);
    });
  }, [id]);

  const handleBorrow = () => {
    const confirmed = window.confirm("Are you sure you want to borrow (delete) this book?");
    if (!confirmed) return;

    axios.delete(`http://localhost:8000/api/book/deleteOne/${id}`)
    .then(() => {
      navigate("/bookCatalogue", { state: { updated: true } });
    })
    .catch((err) => {
      console.log("Borrowing failed:",err);
    });
  };

  return (
    <div className="det">
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Available:</strong> {book.isAvailable ? "Yes" : "No"}</p>
      <button onClick={handleBorrow}>Borrow Book</button>
    </div>
  );
};

export default Borrow;
