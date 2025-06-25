import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Catalogue = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchBooks = () => {
    axios.get("http://localhost:8000/api/book/getAll")
    .then((res) => setBooks(res.data))
    .catch((err) => {
      console.error("Error fetching books:", err);
    });
};

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (location.state?.updated) {
      fetchBooks();
    }
  }, [location.state]);

  return (
    <div className="cata">
      <h2>Book Catalogue</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Name</th>
            <th>Pages</th>
            <th>Available</th>
            <th>Edit informations</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No books available
              </td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.isAvailable ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => navigate(`/update/${book._id}`)}>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Catalogue;