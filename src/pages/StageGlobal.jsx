import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {ClassStringLong} from '../components/ClassString';
import StageHeader from '../components/StageHeader';
import TableHighScores from '../components/TableHighScores';

function StageGlobal() {
  let { stage } = useParams();
  const [entries, setEntries] = useState([]);
  const [country, setCountry] = useState('eAustralia');
  const [vehicleClass, setVehicleClass] = useState('eRallyR5Caps');

  useEffect(() => {
    console.log('StageGlobal useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}?class=${vehicleClass}?limit=10`)
      .then(res => res.json())
      .then(data => {
        setEntries(data);
        setCountry(data[0]['country']);
      })
  }, [vehicleClass]);

  return (
    <div className='m-auto'>
      <Link to={`/profile/8ourne/stage/${stage}`}>Switch to personal</Link>
      <div>
        <StageHeader country={country} stage={stage} />
        <h3 className='text-center'>{ClassStringLong(vehicleClass)}</h3>
      </div>
      <div>
        {/* TODO: change stage too */}
        <select name="classPicker" id="classPicker" onChange={e => setVehicleClass(e.target.value)}> {/* can make the onChange a prop wit ha custom component */}
          <option value="eRallyGrpACaps">Grp A</option>
          <option value="eRallyGrpB4wdCaps">Grp B 4WD</option>
          <option value="eRallyH1FwdCaps">H1 FWD</option>
          <option value="eRallyH2FwdCaps">H2 FWD</option>
          <option value="eRallyH2RwdCaps">H2 RWD</option>
          <option value="eRallyH3RwdCaps">H3 RWD</option>
          <option value="eRallyNr4R4Caps">NR4/R4</option>
          <option value="eRallyR2Caps">R2</option>
          <option value="eRallyR5Caps" selected>R5</option>
          <option value="eRallyRGtCaps">R-GT</option>
        </select>
      </div>
      <TableHighScores entries={entries} />
    </div>
  )
}

export default StageGlobal