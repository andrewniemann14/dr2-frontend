// TODO: learn and use status == loading in all pages
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomeBanner from '../components/HomeBanner';
import TableChallenges from '../components/TableChallenges';

function Home() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    console.log('Profile useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/challenges?limit=12`)
      .then(res => res.json())
      .then(data => setChallenges(data))
  }, []);

// TODO: make it a grid layout
// add top 10 from leaderboard, and personal rating, as minor elements
  return (
    <div>
      <HomeBanner />
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