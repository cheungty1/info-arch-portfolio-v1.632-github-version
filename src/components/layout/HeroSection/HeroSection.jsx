// Import scss modules
import styles from './HeroSection.module.scss';

// Function for HeroSection 
function HeroSection({ title, description, bgImage }) {
  // STATIC ASSETS - NextJS documentation: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span>News</h1>
        <p>{description}</p>
      </div>
      
    </div>
  );
}

export default HeroSection;