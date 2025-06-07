import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Failed from './components/Failed';
import SuccessPage from './components/SuccessPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/Failed" element={<Failed />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
