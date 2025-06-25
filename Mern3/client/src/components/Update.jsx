import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/book/getOne/${id}`)
      .then((res) => {
        const data = res.data;
        setTitle(data.title || "");
        setAuthor(data.author || "");
        setPages(data.pages || 1);
        setIsAvailable(data.isAvailable || false);

      })
      .catch(err => {
        console.error("Error fetching book:", err);
 
      });
  }, [id]);

  const handleUpdate = () => {
    axios.patch(`http://localhost:8000/api/book/updateOne/${id}`, {
      title,
      author,
      pages: Number(pages),
      isAvailable,
    })
      .then(() => {
        navigate("/bookCatalogue", { state: { updated: true } });
      })
      .catch(err => {
        console.error("Update failed:", err);
      });
  };

  const handleBorrow = () => {
    axios.delete(`http://localhost:8000/api/book/deleteOne/${id}`)
      .then(() => {
        navigate("/bookCatalogue", { state: { updated: true } });
      })
      .catch(err => {
        console.error("Borrow (delete) failed:", err);
      });
  };
  return (
    <div className="det">
      <h2>Edit Book Details</h2>

      <div>
        <label><strong>Title:</strong></label><br />
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label><strong>Author:</strong></label><br />
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label><strong>Pages:</strong></label><br />
        <input
          type="number"
          value={pages}
          onChange={e => setPages(e.target.value)}
        />
      </div>

      <div>
        <label><strong>Available:</strong></label><br />
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={e => setIsAvailable(e.target.checked)}
        />
      </div>

      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleBorrow} style={{ marginLeft: "10px" }}>Borrow</button>
    </div>
  );
};

export default Update;