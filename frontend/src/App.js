import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route exact path="/" element={<About />} /> {/* Default route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
