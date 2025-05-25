import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home/Home';
import Questions from './Pages/Questions/Questions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/questions" replace />} />
          <Route path="/home" element={<Home />} />
        </Route>
          <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App
