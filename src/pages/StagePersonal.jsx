// TODO: also make global top 100 (distinct names) for each stage
// TODO: stage names with special characters aren't working in the SQL query

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StageHeader from '../components/stage/StageHeader';
import TableHighScoresPersonal from '../components/stage/TableHighScoresPersonal';

function StagePersonal() {
  let { name, stage } = useParams();
  const [entries, setEntries] = useState([]);
  const [country, setCountry] = useState('eAustralia');

  useEffect(() => {
    console.log('StagePersonal useEffect() running');
    // TODO: remove the '?limit' requirement from the API
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?name=${name}?stage=${stage}`)
      .then(res => res.json())
      .then(data => {
        setEntries(data)
        setCountry(data[0]['country']);
      })
  }, []);


  return (
    <div className='m-auto'>
      <Link to={`/stage/${stage}`}>Switch to global</Link>
      <StageHeader country={country} stage={stage} />
      <TableHighScoresPersonal entries={entries} />
    </div>
  )
}

export default StagePersonal