import {  useState } from 'react'
import Button from '../Button/Button'
import Display from '../Display/Display'
import quizData from '../../data/quiz'
import Result from '../Result/Result'

function Quiz() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctNum, setCorrectNum] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const MAX_QUIZ_LEN = quizData.length

  const handleButton = (e) => {
    // 判定
    if(Number(e.currentTarget.value) === quizData[quizIndex].answerIndex){
      setCorrectNum(correctNum + 1)
    }
    
    // 次のクイズへ進む or 結果発表
    if(quizIndex < MAX_QUIZ_LEN - 1){
      setQuizIndex(quizIndex + 1)
    }
     else {
      setIsCompleted(true)
    }
  }

  return (
    <>
      {isCompleted && <Result maxQuizLen={MAX_QUIZ_LEN} correctNum={correctNum} /> }
      <Display quizIndex={quizIndex} />
      <br />
      {quizData[quizIndex].options.map((option, index) => {
        return (
          <Button key={`option-${index}`} value={index} onClick={(e) => handleButton(e)}>
            {option}
          </Button>
        )
      })}
    </>
  )
}


export default Quiz