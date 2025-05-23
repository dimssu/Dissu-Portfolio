import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home/Home';

function About() {
  return <h1>About Page!</h1>;
}

function Projects() {
  return <h1>Projects Page!</h1>;
}

function Contact() {
  return <h1>Contact Page!</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
