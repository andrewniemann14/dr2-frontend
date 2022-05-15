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
    <div className='lg:grid lg:grid-cols-6'>
      <HomeBanner />
      <br />
      {/* TODO: check for database currency */}
      <div className='lg:col-start-3 col-span-2 md:rounded-lg bg-neutral-800 shadow-lg border-t-2 md:border-2 p-4'>
        <CurrentChallenges challenges={challenges.slice(0,2)} />
      </div>
      <div className='mt-8 lg:col-start-3 col-span-2 md:rounded-lg bg-neutral-800 shadow-lg border-t-2 md:border-2'>
        <RecentChallenges allChallenges={challenges} />
      </div>
    </div>
  )
}