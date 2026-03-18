import React from 'react';
import styles from '../styles/ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>GET IN TOUCH</h2>
        <p className={styles.contactText}>Have questions or ready to start your fitness journey?</p>
        <p className={styles.contactText}>Reach out to us!</p>
        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:info@fitnessgym.com">info@fitnessgym.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Address: 123 Fitness St, Gym City, GC 12345</p>
        </div>
        <button className={styles.contactButton}>Send us a Message</button>
      </div>
    </section>
  );
};

export default ContactSection;
