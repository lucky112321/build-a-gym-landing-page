import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} GymName. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i>Facebook</a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i>Twitter</a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
