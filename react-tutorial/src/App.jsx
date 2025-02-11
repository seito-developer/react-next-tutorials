import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Display from './components/Display/Display'
import Loading from './components/Loading/Loading'

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  },[]);

  return (
    <>
      { isLoading ? <Loading /> : null }
      <Display count={count} />
      <br />
      <Button disable={false} type={"button"} onClick={() => setCount(count + 1)}>
        <span>Button</span>
      </Button>
    </>
  )
}


export default App

