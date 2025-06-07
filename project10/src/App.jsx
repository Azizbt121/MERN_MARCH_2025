import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NumberPage from './components/Number';
import WordPage from './components/Hello';
import ColorPage from './components/Color';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/4" element={<NumberPage />} />
        <Route path="/hello" element={<WordPage />} />
        <Route path="/hello/blue/red" element={<ColorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
