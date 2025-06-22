import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageNames = {
    "/bookcatalogue": "Catalogue",
    "/createbook": "Add Book",
    "/details/:id": "Book Details" /*this is not working i dont know why*/
  };

  const currentPage = pageNames[location.pathname.toLowerCase()] || "";

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
        <div className="nav-current-page">{currentPage}</div>
      </div>
    </nav>
  );
}
