import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {ClassStringLong} from '../components/ClassString';
import StageHeader from '../components/stage/StageHeader';
import TableHighScores from '../components/stage/TableHighScores';

export default function StageGlobal() {
  let { stage } = useParams();
  const [entries, setEntries] = useState([]);
  const [country, setCountry] = useState('eAustralia');
  const [vehicleClass, setVehicleClass] = useState('all');

  useEffect(() => {
    console.log('StageGlobal useEffect() running');
    let allOrNot = vehicleClass !== 'all' ? `?class=${vehicleClass}?limit=10` : '';
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}${allOrNot}`)
      .then(res => res.json())
      .then(data => {
        setEntries(data);
        setCountry(data[0]['country']);
      })
  }, [vehicleClass]);

  const classes = [
    'eRallyH1FwdCaps',
    'eRallyH2FwdCaps',
    'eRallyH2RwdCaps',
    'eRallyH3RwdCaps',
    'eRallyGrpB4wdCaps',
    'eRallyGrpACaps',
    'eRallyR2Caps',
    'eRallyNr4R4Caps',
    'eRallyR5Caps',
    'eRallyRGtCaps',
  ]

  return (
    <div className='m-auto bg-neutral-700 text-white'>
      <Link to={`/profile/8ourne/stage/${stage}`}>Switch to personal</Link>
      <div>
        <StageHeader country={country} stage={stage} />
        <h3 className='text-center'>{ClassStringLong(vehicleClass)}</h3>
      </div>
      <div>
        {/* TODO: change stage too */}
        <select onChange={e => setVehicleClass(e.target.value)} className='bg-neutral-800'> {/* can make the onChange a prop wit ha custom component */}
          <option value={'all'}>All</option>
          {classes.map(c => {
            return <option value={c}>{ClassStringLong(c)}</option>
          })}
        </select>
      </div>
      <TableHighScores entries={entries} allClasses={vehicleClass === 'all'} />
    </div>
  )
}