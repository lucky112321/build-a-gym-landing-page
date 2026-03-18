import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Unleash Your Potential</h1>
        <p>Achieve your fitness goals with our state-of-the-art facilities and expert trainers.</p>
        <button className={styles.ctaButton}>Start Your Journey</button>
      </div>
    </section>
  );
};

export default HeroSection;
