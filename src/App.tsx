import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/questions" element={<Navigate to="/?quiz=1" replace />} />
      </Routes>
    </Router>
  );
}

export default App
