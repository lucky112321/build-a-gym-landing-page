import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Achieve Your Fitness Goals with Us</h1>
          <p>Your journey to a healthier, stronger you starts here.</p>
          <button className="cta-button">Join Now</button>
        </div>
      </header>

      <section className="about-section">
        <div className="container">
          <h2>About Our Gym</h2>
          <p>We are dedicated to providing a state-of-the-art fitness experience. With top-notch equipment, expert trainers, and a supportive community, we help you push your limits and achieve lasting results.</p>
          <ul>
            <li>Modern Equipment</li>
            <li>Certified Trainers</li>
            <li>Variety of Classes</li>
            <li>Personalized Plans</li>
          </ul>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Personal Training</h3>
              <p>One-on-one sessions tailored to your specific needs and goals.</p>
            </div>
            <div className="service-item">
              <h3>Group Classes</h3>
              <p>Energizing classes like Yoga, Zumba, Spinning, and HIIT.</p>
            </div>
            <div className="service-item">
              <h3>Nutrition Coaching</h3>
              <p>Guidance to fuel your body effectively for optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Ready to start your fitness journey? Reach out to us today!</p>
          <p>Email: info@gymname.com</p>
          <p>Phone: (123) 456-7890</p>
          <address>123 Fitness Ave, Gym City, GC 98765</address>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 GymName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
