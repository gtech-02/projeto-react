import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componets/menu/NavBar';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App