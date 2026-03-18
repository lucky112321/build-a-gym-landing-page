import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">GymName</a>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className={styles.ctaButton}>Join Now</button>
    </nav>
  );
};

export default Navbar;
