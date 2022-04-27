// TODO: learn and use status == loading in all pages
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HomeBanner from '../components/home/HomeBanner';
import TableChallenges from '../components/TableChallenges';
import MiniProfile from '../components/home/MiniProfile';
import CurrentChallenges from '../components/home/CurrentChallenges';
import RecentChallenges from '../components/home/RecentChallenges';

export default function Home() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    console.log('Profile useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/challenges?limit=12`)
      .then(res => res.json())
      .then(data => setChallenges(data))
  }, []);

  const [name, setName] = useState(localStorage.getItem('playerName'));

  function changeName(string) {
    setName(string);
  }

  // TODO: add top 10 from leaderboard
  return (
    <div className='bg-neutral-700 text-white min-h-screen grid lg:grid-cols-8'>
      <HomeBanner />
      <MiniProfile />
      <br />
      <div className='lg:col-start-3 col-span-4 rounded-lg bg-neutral-800 shadow-lg border-2'>
        <CurrentChallenges allChallenges={challenges} />
      </div>
      <br />
      <div className='lg:col-start-3 col-span-4 rounded-lg bg-neutral-800 shadow-lg border-2'>
        <RecentChallenges allChallenges={challenges} />
      </div>
    </div>
  )
}