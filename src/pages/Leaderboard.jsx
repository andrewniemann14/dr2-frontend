import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// toggle between NAME and NATIONALITY

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log('Leaderboard useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/players?limit=100`)
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, [])
  
  return (
    <div>
      <h2 className='text-2xl text-center'>Lifetime Leaderboard</h2>
      <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
        <thead>
          <tr className='underline'>
            <td>Name</td>
            <td>Points</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
        {players.map(e => {
          return(
            <tr key={`${e['name']}`} className="">
              <td><Link to={`/profile/${e['name']}`}>{e['name']}</Link></td>
              <td>{Math.floor(e['points'])}</td>
              <td>{(e['points']/e['entries']).toFixed(1)}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard