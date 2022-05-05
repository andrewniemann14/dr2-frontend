import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ScoreRing from "../home/ScoreRing"
import MyRecents from "./MyRecents";
import NameChanger from "../home/NameChanger";


export default function MiniProfile({name, changeName, clearCookie}) {
  const [score, setScore] = useState(0);
  const [recentResults, setRecentResults] = useState([]);

  useEffect(() => {
    name && // this way a blank name won't try to fetch, throwing an error
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?name=${name}?limit=100`)
      .then(res => res.json())
      .then(data => {
        setScore((data.reduce((score, datum) => {return score + datum.score}, 0) / data.length).toPrecision(3));
        setRecentResults(data.slice(0,2));
      })
  }, [name])

  function clearName(e) {
    e.preventDefault();
    setScore(0);
    clearCookie();
  }


  // TODO: convert to a drop down from the NavBar profile, which will be name+score
  return (
    <div className='bg-neutral-800 flex flex-col border-[1px] border-white p-4'>
      <Link to={`/profile`} className=''>
        <div className="w-16 h-16 bg-neutral-800 mx-auto my-4 text-3xl flex justify-center items-center">
          <ScoreRing score={score} precision={2} />
        </div>
      </Link>
      <NameChanger name={name} changeName={changeName} clearName={clearName} />
      <h4 className='text-red-600 mt-6 text-center'>Last Challenges</h4>
      <MyRecents results={recentResults} />
    </div>
  )
}