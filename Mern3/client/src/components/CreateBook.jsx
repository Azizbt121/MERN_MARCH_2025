import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(1);
  const [isAvailable, setIsAvailable] = useState(true);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      pages,
      isAvailable,
    };

    try {
      const response = await axios.post("http://localhost:8000/api/book/create", newBook);

      console.log("Book created:", response.data);

      setTitle("");
      setAuthor("");
      setPages(1);
      setIsAvailable(true);
      setErrors({}); 

      navigate("/bookCatalogue", { state: { updated: true } });
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <p>Title</p>
            {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li>
            <p>Author Name</p>
            {errors.author && <p style={{ color: "red" }}>{errors.author.message}</p>}
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </li>
          <li>
            <p>Pages</p>
            {errors.pages && <p style={{ color: "red" }}>{errors.pages.message}</p>}
            <input
              type="number"
              min="1"
              max="1000"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
            />
          </li>
          <li>
            <p>Is it available</p>
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
            />
          </li>
          <li>
            <button type="submit">Add Book</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Create;
