import styles from './Result.module.css';

const Result = ({ maxQuizLen, correctNum }) => {
    
    return (
       <div className={styles.result}>
        あなたの正解数は {maxQuizLen}問中、{correctNum}問でした！
       </div>
    )
}

export default Result;