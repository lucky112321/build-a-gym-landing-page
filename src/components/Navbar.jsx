import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>FITNESS GYM</a>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className={styles.joinButton}>Join Now</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
