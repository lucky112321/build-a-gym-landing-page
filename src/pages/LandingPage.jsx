import './../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">💪 FitnessPro</div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="container">
          <h1>Transform Your Body, Transform Your Life</h1>
          <p>Join FitnessPro today and start your journey to a healthier, stronger you. We offer personalized training, state-of-the-art equipment, and a supportive community.</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p>FitnessPro is dedicated to helping individuals achieve their fitness goals. Our expert trainers and cutting-edge facilities provide the perfect environment for success. We believe in a holistic approach to wellness, focusing on physical strength, mental well-being, and nutritional balance.</p>
          <p>Our mission is to inspire and empower our members to live their best lives through fitness.</p>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Personal Training</h3>
              <p>One-on-one sessions tailored to your specific goals and fitness level.</p>
            </div>
            <div className="service-card">
              <h3>Group Classes</h3>
              <p>Energetic group workouts including yoga, Zumba, HIIT, and more.</p>
            </div>
            <div className="service-card">
              <h3>Nutrition Plans</h3>
              <p>Customized meal plans designed to complement your training and optimize results.</p>
            </div>
            <div className="service-card">
              <h3>State-of-the-Art Equipment</h3>
              <p>Access to the latest fitness machines and free weights for all your workout needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Sign up now for a free trial and experience the FitnessPro difference!</p>
          <button className="cta-button">Join Now</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 FitnessPro. All rights reserved.</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
