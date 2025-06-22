import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      pages: parseInt(pages),
      isAvailable,
    };

    try {
      const response = await fetch("http://localhost:8000/api/book/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        const savedBook = await response.json();
        navigate("/details", { state: savedBook });
      } else {
        alert("Failed to create book");
      }
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <p>Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </li>
        <li>
          <p>Author Name</p>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </li>
        <li>
          <p>Pages</p>
          <input
            type="number"
            min="1"
            max="1000"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            required
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
  );
};
