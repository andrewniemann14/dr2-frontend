import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import ScoreRing from "../ScoreRing"
import NameChanger from "./NameChanger";


export default function MiniProfile({name, changeName, clearCookie}) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    name && // this way a blank name won't try to fetch, throwing an error
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?name=${name}?limit=100`)
      .then(res => res.json())
      .then(data => {
        setScore((data.reduce((score, datum) => {return score + datum.score}, 0) / data.length).toPrecision(3));
      })
  }, [name])

  function clearName(e) {
    e.preventDefault();
    setScore(0);
    clearCookie();
  }


  // TODO: convert to a drop down from the NavBar profile, which will be name+score
  return (
    <div className='col-start-8 border-2 flex flex-col items-center'>
      <div className="w-16 h-16 bg-neutral-800 mx-auto my-2 text-2xl flex justify-center items-center">
        <ScoreRing score={score} precision={2} />
      </div>
      <Link to={`/profile/${name}`} className='hover:text-red-600 hover:underline'>{name}</Link>
      <Link to="/identify" className='hover:text-red-600 hover:underline'>Identify</Link>
      <NameChanger name={name} changeName={changeName} />
      <button onClick={clearName}>clear name</button>
    </div>
  )
}