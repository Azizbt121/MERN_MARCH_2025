import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookTitle, setBookTitle] = useState("");

  const path = location.pathname.toLowerCase();

  useEffect(() => {
    if (path.startsWith("/update/")) {
      const id = path.split("/")[2]; 
      axios.get(`http://localhost:8000/api/book/getOne/${id}`)
        .then(res => setBookTitle(res.data.title || ""))
        .catch(() => setBookTitle(""));
    } else {
      setBookTitle("");
    }
  }, [path]);

  return (
    <nav className="nav">
      <div className="navbar-container">
        <ul className="nav-list">
          <li>
            <button className="nav-btn" onClick={() => navigate("/bookcatalogue")}>Catalogue</button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => navigate("/createbook")}>Add Book</button>
          </li>
        </ul>

        <div className="nav-current-page">
          {path === "/bookcatalogue" ? "Catalogue" :
           path === "/createbook" ? "Add Book" :
           path.startsWith("/update/") ? `Editing: ${bookTitle}` :""}
        </div>
      </div>
    </nav>
  );
}
