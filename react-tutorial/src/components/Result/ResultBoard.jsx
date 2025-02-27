import { useEffect, useState } from 'react';
import styles from './ResultBoard.module.css';

const ResultBoard = ({ maxQuizLen, correctNum }) => {
    const [count, setCount] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCount(true);
        }, 3000);
    },[])
    
    return (
        <div className={styles.resultBoard}>
            <span>あなたの正解数は...</span>
            {count && (
                <>
                    <span className={styles.resultBoardHighlight}>
                        {maxQuizLen}問中、{correctNum}問
                    </span>
                    でした！
                </>
            )}
       </div>
    )
}

export default ResultBoard;