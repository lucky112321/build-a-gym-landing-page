import styles from '../styles/FeaturesSection.module.css';

const FeaturesSection = () => {
  const features = [
    { title: 'Modern Equipment', description: 'Access to the latest fitness machines and free weights.' },
    { title: 'Expert Trainers', description: 'Certified professionals to guide you through your fitness journey.' },
    { title: 'Group Classes', description: 'Enjoy a variety of classes from yoga to high-intensity interval training.' },
    { title: 'Nutrition Plans', description: 'Personalized diet plans to complement your workouts.' },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <h2>Our Features</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
