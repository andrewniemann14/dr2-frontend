import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClassString from '../components/ClassString';
import ProfileSummary from '../components/ProfileSummary';
import TableProfileRecent from '../components/TableProfileRecent';

function Profile() {
  let { name } = useParams();
  const [entries, setEntries] = useState([]);
  const [nationality, setNationality] = useState('loading');
  const [overallScore, setOverallScore] = useState(0);
  const [classScores, setClassScores] = useState([]);

  useEffect(() => {
    console.log('Profile useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?name=${name}?limit=100`)
      .then(res => res.json())
      .then(data => {
        setEntries(data);
        setNationality(data[0]['nationality']);
        setOverallScore((data.reduce((score, datum) => {return score + datum.score}, 0) / data.length).toPrecision(3));

        // gets all unique values from array of objects
        let classes = [];
        data.forEach(e => {
          if (!classes.some(c => JSON.stringify(c) === JSON.stringify(e.vehicle_class))) {
            classes.push(e.vehicle_class);
          }
        })

        // uses array as keys for an object
        let scoredClasses = [];
        classes.forEach((c, i) => {
          let classEntries = data.filter(e => e.vehicle_class === c);
          scoredClasses[i] = {}; // need to do this or next lines will throw 'cannot set property to undefined'
          scoredClasses[i].class = c;
          scoredClasses[i].score = (classEntries.reduce((score, datum) => {return score + datum.score}, 0) / classEntries.length).toPrecision(3);
        })

        // sort array of objects by a value
        setClassScores(scoredClasses.sort((a, b) => b.score - a.score))

      })
  }, []);

  try {
  } catch {

  }


  return (
    <div className='bg-gray-700 text-white min-h-screen'>
      <ProfileSummary name={name} overallScore={overallScore} nationality={nationality} />
      <div className='rounded-lg bg-gray-800 w-fit m-auto shadow-lg border-2'>
        <h3 className="text-4xl text-center">Recent challenges</h3>
        <TableProfileRecent name={name} entries={entries.slice(0, 10)} />
      </div>
      <div className='rounded-lg bg-gray-800 w-fit m-auto shadow-lg border-2'>
        <h3 className="text-4xl text-center">Class scores</h3>
        {classScores.map(c => {
          return (
          <div key={c} className="flex flex-row">
            <p><ClassString vehicle_class={c.class} /></p>
            <p className='ml-4'>{c.score}</p>
          </div>
          )
        })}
      </div>
      <Link to={`/profile/${name}/challenges`} className='m-auto'>All challenges</Link>
    </div>
  )
}

export default Profile