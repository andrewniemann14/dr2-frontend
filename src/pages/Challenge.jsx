// https://ui.mantine.dev/category/tables
// TODO: add filtering with multi-select

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {ClassStringLong} from '../components/ClassString';

function Challenge() {
  let { id } = useParams();
  const [challenge, setChallenge] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('Challenge useEffect() running');
    // or is it faster to do a call to each table?
    fetch(`https://data.niemann.app/dr2/index.php/challenges?id=${id}`)
      .then(res => res.json())
      .then(data => setChallenge(data[0]))
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?id=${id}`)
      .then(res => res.json())
      .then(data => setEntries(data))
  }, []);

  // sticking everything in a try/catch block or it crashes before useEffect can even run
  let stage, date, vehicle_class, dnfRate, averageScore;
  try {
    console.log(challenge);
    stage = challenge.stage;
    date = challenge.start.split('T')[0];
    vehicle_class = challenge.vehicle_class;
  } catch {
    
  }
  try {
    dnfRate = (entries.filter(e => {return e['dnf']}).length / entries.length * 100).toPrecision(3);
    averageScore = (
      entries.map(e => {return e['score']}).reduce((a, b) => {return a+b}, 0)
      /
      entries.filter(e => {return !e['dnf']}).length
    ).toPrecision(3);
  } catch {
    
  }



  return (
    <div>
      <div className='flex flex-row items-center justify-center space-x-8'>
        <div>
          <h2 className='text-xl'>{id}</h2>
          <h2 className='text-xs'>{date}</h2>
        </div>
        <h2 className='text-xl'>{stage}</h2>
        <h2 className='text-xl'>{ClassStringLong(vehicle_class)}</h2>
        <div>
          <h2>DNF rate: {dnfRate}%</h2>
          <h2>Average score: {averageScore}</h2>
        </div>
      </div>
      <table className='m-auto table-auto'>
        <tbody>
          {entries.map(e => {
            return(
              <tr key={`${e['placement']}`}>
                <td>{e['placement']}</td>
                <td><Link to={`/profile/${e['name']}`}>{e['name']}</Link></td>
                <td>{e['vehicle']}</td>
                <td>{e['time']}</td>
                <td>{e['score']}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Challenge