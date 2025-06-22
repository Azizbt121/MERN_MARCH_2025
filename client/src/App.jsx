import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Create } from "./components/CreateBook";
import { BookDetails } from "./components/details";
import { Catalogue } from "./components/bookCatalogue";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/bookCatalogue" element={<Catalogue />} />
        <Route path="/createbook" element={<Create />} />
        <Route path="/details/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
