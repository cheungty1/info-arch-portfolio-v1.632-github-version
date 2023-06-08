// Import from scss module
import styles from './Button.module.scss';

// Button Function
function Button({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      className={styles.button}
    >  
      {children}  
    </button>
  );
}

export default Button;