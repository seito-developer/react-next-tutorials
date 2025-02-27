import {  useState } from 'react'
import Button from '../components/Button/Button'
import Display from '../components/Display/Display'
import quizData from '../data/quiz'
import { useNavigate, useRoutes } from 'react-router-dom'
// import { Route } from 'react-router-dom';
useRoutes
function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctNum, setCorrectNum] = useState(0)
  const MAX_QUIZ_LEN = quizData.length
  const navigate = useNavigate()

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
      navigate('/result', { state: {
        quizLen: MAX_QUIZ_LEN,
        correctNum: correctNum
      }})
    }
  }

  return (
    <>
      
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


export default QuizPage