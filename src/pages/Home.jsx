import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>This is the home page</h2>
      <Link to="/profile/8ourne">Go to profile</Link>
    </div>
  )
}

export default Home