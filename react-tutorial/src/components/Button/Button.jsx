import styles from './Button.module.css';

const Button = ({ onClick, children, value }) => {

    return (
        <button className={styles.button} type="button" value={value}
            onClick={onClick}
        >
            <span className={styles.buttonInner}>{children}</span>
        </button>
    );
}

export default Button;