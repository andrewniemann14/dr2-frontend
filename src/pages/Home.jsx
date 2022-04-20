// TODO: learn and use status == loading in all pages
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TableChallenges from '../components/TableChallenges';

function Home() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    console.log('Profile useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/challenges?limit=12`)
      .then(res => res.json())
      .then(data => setChallenges(data))
  }, []);


  return (
    <div>
      <div className="h-64 w-full text-center flex flex-col justify-center">
        <h1 className='text-5xl'>DiRT Rally 2.0</h1>
        <h2 className='text-6xl'>Dashboard</h2>
      </div>
      <br />
      <h3 className='text-2xl text-center'>Current challenges</h3>
      <TableChallenges challenges={challenges.slice(0,2)} />
      <h3 className='text-2xl text-center'>Recent challenges</h3>
      <TableChallenges challenges={challenges.slice(2)} />
      <br />
    </div>
  )
}

export default Home