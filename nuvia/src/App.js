import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Community from './components/Community';
import FindNannies from './components/FindNannies';
import FindWalkInClinic from './components/FindWalkInClinic';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the Service Finder</h1>
        <nav>
          <Link to="/community"><button>Community</button></Link>
          <Link to="/find-nannies"><button>Find Nannies</button></Link>
          <Link to="/find-walk-in-clinic"><button>Walk-in Clinic</button></Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/find-nannies" element={<FindNannies />} />
          <Route path="/find-walk-in-clinic" element={<FindWalkInClinic />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Select a service to get started</h2>
  </div>
);

export default App;
