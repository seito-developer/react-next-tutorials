import { Link } from 'react-router-dom'

function HomePage() {

  return (
    <>
      <h1>Quiz App</h1>
      <Link to='/quiz'>
        Start!
      </Link>
    </>
  )
}

export default HomePage