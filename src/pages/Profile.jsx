import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProfileSummary from '../components/ProfileSummary';

function Profile() {
  let { name } = useParams();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('Profile useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?name=${name}?limit=100`)
      .then(res => res.json())
      .then(data => setEntries(data))
  }, []);

  let nationality = 'loading';
  let overallScore;
  try {
    nationality = entries[0]['nationality'];
    let score = 0;
    entries.forEach(e => score += e['score']);
    overallScore = (score / entries.length).toPrecision(3);
    
  } catch {

  }

  return (
    <div className='m-auto'>
      <ProfileSummary name={name} overallScore={overallScore} nationality={nationality} />
      <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
        <thead>
          <tr>
              <td>Challenge #</td>
              <td>Date</td>
              <td>Stage</td>
              <td>Vehicle</td>
              <td>Score</td>
            </tr>
        </thead>
        <tbody>
        {entries.map(e => {
          return(
            <tr key={`${e['id']}`} className="">
              <td><Link to={`/challenge/${e['id']}`}>{e['id']}</Link></td>
              <td>{e['start'].split('T')[0]}</td>
              <td><Link to={`/profile/${name}/stage/${e['stage']}`}>{e['stage']}</Link></td> {/* two pages: personal top 10 and global top 100 (distinct names) */}
              <td>{e['vehicle']}</td>
              <td>{e['score']}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Profile