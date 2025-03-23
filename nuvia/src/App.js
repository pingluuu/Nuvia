import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FindNannies from './components/FindNannies';
import Community from './components/Community';
import FindWalkInClinic from './components/FindWalkInClinic';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
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
      <section className="hero-background">
        <div className="hero-content">
          <h1>Trusted Pediatric Support, Anytime</h1>
          <p>Seamless access to walk-in clinics, nanny services, and community help.</p>
          <Link to="/find-walk-in-clinic">
            <button className="clinic-btn">🏥 Find a Walk-in Clinic</button>
          </Link>
        </div>
      </section>

      {/* Who We Support Section */}
      <section className="support-section">
        <h2>Who We Support</h2>
        <div className="support-icons">
          <div>
          <img src="/images/family.png" alt="Family" />
            <p>Families</p>
          </div>
          <div>
          <img src="/images/Employers.png" alt="Employers" />
            <p>Employers</p>
          </div>
          <div>
          <img src="/images/Insurers.png" alt="Insurers" />
            <p>Insurers</p>
          </div>
          <div>
          <img src="/images/Advisors.png" alt="Advisors" />
            <p>Advisors</p>
          </div>
          <div>
          <img src="/images/HealthCare.png" alt="HealthCare" />
            <p>Healthcare Professionals</p>
          </div>
        </div>
        <div className="support-highlight">
          <div className="support-text">
            <h3>Caring For Canadian Families</h3>
            <p>
            Struggling to find timely pediatric healthcare providers, especially walk-in clinics or family doctors accepting new patients. Nuvia bridges this gap—helping parents access care quickly and find trusted childcare when their child is unwell, so they can focus on work and well-being.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="support-image">
            <img src="/images/family.jpg" alt="Family using laptop" />
          </div>
        </div>
      </section>

      {/* Trusted Providers Section */}
      <section className="trusted-section">
        <h2>The Nuvia Network</h2>
        <p>
          Our team includes care providers and support networks trained at Canada's top pediatric
          hospitals and child development organizations.
        </p>
        <div className="trusted-logos">
          <img src="/images/care-connect-logo.png" alt="CareConnect" />
          <img src="/images/kids-and-company-logo.png" alt="Kids and Company" />
          <img src="/images/nannies-on-call-logo.png" alt="Nannies on Call" />
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features">
        <div className="feature-card">
          <Link to="/find-nannies">
            <h3>🍼 Find Nannies</h3>
            <p>Browse and connect with trusted in-home caregivers near you.</p>
          </Link>
        </div>

        <div className="feature-card">
          <Link to="/community">
            <h3>👥 Community Forum</h3>
            <p>Get tips, share questions, and connect with other parents.</p>
          </Link>
        </div>

        <div className="feature-card">
          <Link to="/find-walk-in-clinic">
            <h3>🏥 Walk-in Clinics</h3>
            <p>Find fast, reliable care options without an appointment.</p>
          </Link>
        </div>
      </section>

      {/* How It Works 
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>Choose a Service</h3>
            <p>Select the care service you need — from finding a nanny to accessing walk-in clinics or community help.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">📍</div>
            <h3>Get Matched</h3>
            <p>We suggest options near you based on location and preferences, personalized for your needs.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">✅</div>
            <h3>Connect Instantly</h3>
            <p>Book a nanny, check walk-in wait times, or connect with the parent community in just a few taps.</p>
          </div>
        </div>
      </section>
      */}


      {/* Testimonials (optional) */}
      <section className="testimonials">
        <div className="testimonials-header">
          <div>
            <h2>What People Say About Us</h2>
            <h3>Top-rated pediatric care.</h3>
            <div className="stars">
              ⭐⭐⭐⭐⭐ <span className="score">5/5</span>
            </div>
            <button className="review-btn">Write a Review</button>
          </div>
        </div>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="stars">Lisa ⭐⭐⭐⭐⭐</p>
            <p>“I’m blown away by my first experience — it was easy to sign up, clear steps, and helpful referrals. This is what Canadian healthcare should feel like.”</p>
          </div>
          <div className="testimonial-card">
            <p className="stars">Alice ⭐⭐⭐⭐⭐</p>
            <p>“Nuvia helped me get medical care for my child instantly — no waiting, no stress. A true game changer for working parents.”</p>
          </div>
          <div className="testimonial-card">
            <p className="stars">Ping ⭐⭐⭐⭐⭐</p>
            <p>“We avoided the ER thanks to Nuvia's nurses. Fast, knowledgeable, and comforting — highly recommend.”</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;