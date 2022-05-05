// TODO: learn and use status == loading in all pages
// TODO: name needs to be Context
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HomeBanner from '../components/home/HomeBanner';
import CurrentChallenges from '../components/home/CurrentChallenges';
import RecentChallenges from '../components/home/RecentChallenges';

export default function Home() {
  console.log('Home cookieName: ', localStorage.getItem('playerName'));

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    console.log('Home useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/challenges?limit=12`)
      .then(res => res.json())
      .then(data => setChallenges(data))
  }, []);

  // TODO: add top 10 from leaderboard
  return (
    <div className='bg-neutral-700 text-white min-h-screen lg:grid lg:grid-cols-6'>
      <HomeBanner />
      <br />
      <div className='lg:col-start-3 col-span-2 md:rounded-lg bg-neutral-800 shadow-lg border-t-2 md:border-2'>
        <CurrentChallenges allChallenges={challenges} />
      </div>
      <br />
      <div className='lg:col-start-3 col-span-2 md:rounded-lg bg-neutral-800 shadow-lg border-t-2 md:border-2'>
        <RecentChallenges allChallenges={challenges} />
      </div>
    </div>
  )
}