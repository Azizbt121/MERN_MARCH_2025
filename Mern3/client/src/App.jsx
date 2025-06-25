import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/CreateBook";
import BookDetails from "./components/bookDetails";
import Catalogue from "./components/bookCatalogue";
import Update from "./components/Update";
import Borrow from "./components/borrow";
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
        <Route path="/update/:id" element={<Update />} /> 
        <Route path="/borrow/:id" element={<Borrow />} />
      </Routes>
    </Router>
  );
}

export default App;
