import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>TRANSFORM YOUR BODY & MIND</h1>
        <p className={styles.heroSubtitle}>Unleash your potential with our expert trainers and state-of-the-art facilities.</p>
        <button className={styles.heroButton}>GET STARTED TODAY</button>
      </div>
    </section>
  );
};

export default HeroSection;
