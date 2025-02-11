import styles from './Display.module.css';

const Display = ({ count }) => {
    
    return (
        <div className={styles.display}>
          Count: + {count}
        </div>
    )
}

export default Display;