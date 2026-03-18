import React from 'react';
import './../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <header className="heroSection">
        <div className="heroContent">
          <h1>Achieve Your Fitness Goals</h1>
          <p>Join our gym today and experience the difference!</p>
          <button className="ctaButton">Start Your Free Trial</button>
        </div>
      </header>

      <section className="featuresSection">
        <h2>Why Choose Us?</h2>
        <div className="featureCards">
          <div className="featureCard">
            <h3>State-of-the-Art Equipment</h3>
            <p>Access the latest in fitness technology.</p>
          </div>
          <div className="featureCard">
            <h3>Expert Trainers</h3>
            <p>Personalized guidance to maximize your potential.</p>
          </div>
          <div className="featureCard">
            <h3>Community Support</h3>
            <p>Train with a motivating and friendly community.</p>
          </div>
        </div>
      </section>

      <section className="callToActionSection">
        <h2>Ready to Transform?</h2>
        <p>Sign up now and get exclusive member benefits.</p>
        <button className="ctaButton">Join Now</button>
      </section>

      <footer className="footerSection">
        <p>&copy; {new Date().getFullYear()} GymName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
