// Import Scss module
import styles from './Footer.module.scss'

// Function for footer
function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <div className="container">
        <p className="text-right pr-5">
          &copy; {getCurrentYear()} iWorld
        </p>
      </div>
    </div>
  );
}

export default Footer;