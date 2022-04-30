// TODO: learn and use status == loading in all pages
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HomeBanner from '../components/home/HomeBanner';
import MiniProfile from '../components/home/MiniProfile';
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

  const [hasCookie, setHasCookie] = useState(localStorage.getItem('playerName'))
  const [name, setName] = useState();
  useEffect(() => {
    console.log('Home state name: ', name);
    hasCookie && setName(localStorage.getItem('playerName'));
  }, [name])

  function changeName(inputName) {
    localStorage.setItem('playerName', inputName)
    setName(inputName);
  }

  function clearCookie() {
    localStorage.removeItem('playerName');
    setName();
    setHasCookie(null);
  }

  // TODO: add top 10 from leaderboard
  return (
    <div className='bg-neutral-700 text-white min-h-screen lg:grid lg:grid-cols-6'>
      <HomeBanner />
      <MiniProfile name={name} changeName={changeName} clearCookie={clearCookie} />
      <br />
      <div className='lg:col-start-3 col-span-2 rounded-lg bg-neutral-800 shadow-lg border-2'>
        <CurrentChallenges allChallenges={challenges} name={name} />
      </div>
      <br />
      <div className='lg:col-start-3 col-span-2 rounded-lg bg-neutral-800 shadow-lg border-2'>
        <RecentChallenges allChallenges={challenges} name={name} />
      </div>
    </div>
  )
}