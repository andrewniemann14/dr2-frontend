// TODO: also make global top 100 for each stage

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProfileStage() {
  let { name, stage } = useParams();
  const [stageObject, setStageObject] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('ProfileStage useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?name=${name}?stage=${stage}?limit=10`)
      .then(res => res.json())
      .then(data => setEntries(data))
  }, []);

  // TODO: filter entries to get fastest entry for each class
  let country;
  try {
    country = entries[0]['country'];
    
  } catch {

  }

  return (
    <div className='m-auto'>
      <Link to="/" className='underline'>Go Home</Link>
      <h1 className='text-2xl'>{stage}</h1>
      <h3>{country}</h3>
      <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
        <tbody>
          {entries.map(e => {
            return(
              <tr key={`${e['id']}`} className="">
                <td><Link to={`/challenge/${e['id']}`}>{e['id']}</Link></td>
                <td>{e['start'].split('T')[0]}</td>
                <td>{e['placement']}</td>
                <td>{e['vehicle_class']}</td>
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

export default ProfileStage