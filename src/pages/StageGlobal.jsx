// TODO: also make global top 100 (distinct names) for each stage

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TableGlobalHiScores from '../components/TableGlobalHiScores';

function StageGlobal() {
  let { stage } = useParams();
  const [entries, setEntries] = useState([]);
  const [vehicleClass, setVehicleClass] = useState('eRallyR5Caps');

  useEffect(() => {
    console.log('StageGlobal useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}?class=${vehicleClass}?limit=10`)
      .then(res => res.json())
      .then(data => setEntries(data))
  }, [vehicleClass]);

  let country;
  try {
    country = entries[0]['country'].slice(1)
  } catch {

  }

  return (
    <div className='m-auto'>
      <Link to={`/stage/${stage}`}>Switch to global</Link>
      <h1 className='text-3xl'>{stage}</h1>
      <h3>{country}</h3>
      <h3>{vehicleClass}</h3>
      <div>
        {/* change stage too */}
        {/* TODO: crashing when select changes - 'objects are not valid as a React child' */}
        <select name="classPicker" id="classPicker" onChange={setVehicleClass}>
          <option value="eRallyGrpACaps">Grp A</option>
          <option value="eRallyGrpB4wdCaps">Grp B 4WD</option>
          <option value="eRallyH1FwdCaps">H1 FWD</option>
          <option value="eRallyH2FwdCaps">H2 FWD</option>
          <option value="eRallyH2RwdCaps">H2 RWD</option>
          <option value="eRallyH3RwdCaps">H3 RWD</option>
          <option value="eRallyNr4R4Caps">NR4/R4</option>
          <option value="eRallyR2Caps">R2</option>
          <option value="eRallyR5Caps">R5</option>
          <option value="eRallyRGtCaps">R-GT</option>
        </select>
      </div>
      <TableGlobalHiScores entries={entries} />
    </div>
  )
}

export default StageGlobal