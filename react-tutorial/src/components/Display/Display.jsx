import quizData from '../../data/quiz';
import styles from './Display.module.css';

const Display = ({ quizIndex }) => {
    
    return (
        <div className={styles.display}>
          {`Q.${quizIndex + 1} ${quizData[quizIndex].question}`}
        </div>
    )
}

export default Display;