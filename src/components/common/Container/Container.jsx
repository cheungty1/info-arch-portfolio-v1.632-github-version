// Import from scss module
import styles from './Container.module.scss';

// Function for container
function Container(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default Container;