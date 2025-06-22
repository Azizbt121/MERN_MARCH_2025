import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Catalogue = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/book/getAll")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

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
            <th>Book Page</th>
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
            books.map((book, index) => (
              <tr key={book._id || index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.isAvailable ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => navigate(`/details/${book._id}`)}>Check it out</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
