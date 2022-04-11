// https://ui.mantine.dev/category/tables
// TODO: add filtering with multi-select

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Challenge() {
  let { id } = useParams();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('Challenge useEffect() running');
    // or is it faster to do a call to each table?
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?id=${id}`)
      .then(res => res.json())
      .then(data => setEntries(data))
  }, []);

  // sticking everything in a try/catch block or it crashes before useEffect can even run
  let stage, date, vehicle_class, dnfRate, averageScore;
  try {
    stage = entries[0]['stage'];
    date = entries[0]['start'].split('T')[0];
    vehicle_class = entries[0]['vehicle_class'].replace('eRally', '').replace('Caps', '');
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
        <h2 className='text-xl'>{vehicle_class}</h2>
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