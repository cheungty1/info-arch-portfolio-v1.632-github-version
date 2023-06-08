// Import from scss module
import styles from './Card.module.scss';

// Function for card for articleitem and articlelist
function Card(props) {
  return (
    <div className={ props.size === "single" 
      ? styles.singleCard 
      : styles.gridCard 
    }>
      {props.children}
    </div>
  );
}

export default Card;