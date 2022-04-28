import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import ScoreRing from "../ScoreRing"
import MyRecents from "./MyRecents";
import NameChanger from "./NameChanger";


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
    <div className='col-start-8 bg-neutral-800 flex flex-col items-center'>
      <Link to={`/profile/${name}`} className=''>
      <div className="w-16 h-16 bg-neutral-800 mx-auto my-2 text-2xl flex justify-center items-center">
        <ScoreRing score={score} precision={2} />
      </div>
      {name}</Link>
      <NameChanger name={name} changeName={changeName} />
      <Link to="/identify" className='hover:text-red-600 hover:underline'>Search</Link>
      <button onClick={clearName}>clear name</button>
      <ul>
        <MyRecents results={recentResults} />
      </ul>
    </div>
  )
}