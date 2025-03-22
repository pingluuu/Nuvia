import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FindNannies from './components/FindNannies';
import Community from './components/Community';
import FindWalkInClinic from './components/FindWalkInClinic';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/find-nannies" element={<FindNannies />} />
          <Route path="/find-walk-in-clinic" element={<FindWalkInClinic />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with background */}
      <section className="hero-background">
        <div className="hero-content">
          <h1>Babysitter & Nanny Services in Your City</h1>
          <p>Trusted by families to find care services that fit their needs.</p>
          <Link to="/find-nannies"><button className="nanny-btn">🍼 Find a Nanny</button></Link>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features">
        <div className="feature-card">
          <Link to="/find-nannies">
            <h3>🍼 Find Nannies</h3>
            <p>Browse and connect with local caregivers near you.</p>
          </Link>
        </div>

        <div className="feature-card">
          <Link to="/community">
            <h3>👥 Community</h3>
            <p>Ask questions, share tips, and build connections.</p>
          </Link>
        </div>

        <div className="feature-card">
          <Link to="/find-walk-in-clinic">
            <h3>🏥 Walk-in Clinics</h3>
            <p>Quickly find nearby walk-in healthcare options.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};



export default App;
