import './../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">💪 GymMaster</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="join-button">Join Now</button>
        </nav>
        <div className="hero-content">
          <h1>Transform Your Body, Elevate Your Life</h1>
          <p>Achieve your fitness goals with our expert trainers and state-of-the-art facilities.</p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </header>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <p>GymMaster is dedicated to providing a premium fitness experience. With cutting-edge equipment, diverse classes, and a supportive community, we help you unlock your full potential. Our certified trainers are here to guide you every step of the way, ensuring you reach your health and fitness aspirations.</p>
          <img src="https://via.placeholder.com/400x250?text=Gym+Interior" alt="Gym Interior" />
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Personal Training</h3>
            <p>One-on-one sessions tailored to your specific needs and goals.</p>
          </div>
          <div className="service-card">
            <h3>Group Classes</h3>
            <p>High-energy group workouts including yoga, spin, HIIT, and more.</p>
          </div>
          <div className="service-card">
            <h3>Nutrition Plans</h3>
            <p>Expert dietary advice to complement your fitness regimen.</p>
          </div>
          <div className="service-card">
            <h3>Modern Equipment</h3>
            <p>Access to the latest fitness technology and machinery.</p>
          </div>
        </div>
      </section>

      <section id="trainers" className="trainers-section">
        <h2>Meet Our Trainers</h2>
        <div className="trainer-cards">
          <div className="trainer-card">
            <img src="https://via.placeholder.com/150?text=Trainer+1" alt="Trainer 1" />
            <h3>John Doe</h3>
            <p>Strength & Conditioning</p>
          </div>
          <div className="trainer-card">
            <img src="https://via.placeholder.com/150?text=Trainer+2" alt="Trainer 2" />
            <h3>Jane Smith</h3>
            <p>Yoga & Pilates</p>
          </div>
          <div className="trainer-card">
            <img src="https://via.placeholder.com/150?text=Trainer+3" alt="Trainer 3" />
            <h3>Mike Johnson</h3>
            <p>HIIT Specialist</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Ready to get started? Reach out to us today!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 GymMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
