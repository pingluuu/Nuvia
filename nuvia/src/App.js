import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FindNannies from './components/FindNannies';
import Community from './components/Community';
import FindWalkInClinic from './components/FindWalkInClinic';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
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
      {/* Hero Section */}
      <section className="hero">
        <h1>Find the Care You Need, When You Need It</h1>
        <p>Nuvia connects you with trusted services in your community — from childcare to clinics.</p>
        <div className="hero-buttons">
          <Link to="/find-nannies"><button>🍼 Find Nannies</button></Link>
          <Link to="/community"><button>👥 Community</button></Link>
          <Link to="/find-walk-in-clinic"><button>🏥 Walk-in Clinics</button></Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li><strong>👥 Community:</strong> Connect with local families, share tips, and ask for help.</li>
          <li><strong>🍼 Find Nannies:</strong> Browse trusted caregivers near you.</li>
          <li><strong>🏥 Walk-in Clinics:</strong> Find healthcare access fast, no appointment needed.</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Select a service</li>
          <li>Browse local providers</li>
          <li>Connect and get the support you need</li>
        </ol>
      </section>
    </div>
  );
};

export default App;
