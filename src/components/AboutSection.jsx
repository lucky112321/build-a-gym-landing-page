import React from 'react';
import styles from '../styles/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>ABOUT OUR GYM</h2>
        <div className={styles.aboutContent}>
          <p>
            Welcome to FITNESS GYM, where we believe in fostering a community dedicated to health and wellness. 
            Established in 20XX, our mission has always been to provide a supportive and motivating environment 
            for individuals of all fitness levels to achieve their goals.
          </p>
          <p>
            We offer a wide range of services including personal training, group fitness classes, and advanced 
            strength and cardio equipment. Our certified trainers are passionate about guiding you through your 
            fitness journey, ensuring safety, effectiveness, and enjoyment every step of the way.
          </p>
          <p>
            Join us and become a part of a fitness family that encourages, challenges, and celebrates every success, big or small.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
