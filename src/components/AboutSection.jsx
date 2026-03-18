import styles from '../styles/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2>About Our Gym</h2>
        <p>
          Established in 2020, GymName is more than just a fitness center; it's a community dedicated to health and wellness.
          We provide a supportive environment where individuals of all fitness levels can thrive.
        </p>
        <p>
          Our mission is to empower our members to achieve their personal best through personalized training,
          innovative classes, and a commitment to their overall well-being.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img src="/about-gym.jpg" alt="Gym Interior" /> {/* Placeholder image */}
      </div>
    </section>
  );
};

export default AboutSection;
