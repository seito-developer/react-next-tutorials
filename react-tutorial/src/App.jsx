import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Display from './components/Display/Display'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <br />
      <Button disable={false} type={"button"} onClick={() => setCount(count + 1)}>
        <span>Button</span>
      </Button>
    </>
  )
}


export default App

