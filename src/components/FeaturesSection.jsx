import React from 'react';
import styles from '../styles/FeaturesSection.module.css';

const FeaturesSection = () => {
  const features = [
    { title: 'Expert Trainers', description: 'Certified professionals dedicated to your success.' },
    { title: 'Modern Equipment', description: 'State-of-the-art machines for all your fitness needs.' },
    { title: 'Personalized Plans', description: 'Custom workout and nutrition plans tailored for you.' },
    { title: 'Group Classes', description: 'Fun and engaging classes for all fitness levels.' }
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>WHY CHOOSE US?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
