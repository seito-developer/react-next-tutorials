import { useEffect, useState } from 'react'
import Result from '../components/Result/ResultBoard'
import { useLocation, useNavigate } from 'react-router-dom'

function ResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [quizResult] = useState(location.state)

  useEffect(() => {
    if(!location.state) navigate('/')
  }, [location, navigate])

  return (
    <>
      <h1>Result</h1>
      <Result maxQuizLen={quizResult?.quizLen} correctNum={quizResult?.correctNum} />
    </>
  )
}


export default ResultPage