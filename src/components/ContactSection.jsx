import styles from '../styles/ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact Us</h2>
      <p>Have questions or want to learn more? Reach out to us!</p>
      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> info@gymname.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Fitness Ave, Gym City, GC 12345</p>
      </div>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
