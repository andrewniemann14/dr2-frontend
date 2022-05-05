import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {ClassStringLong} from '../components/ClassString';
import { ScoreColorText } from '../components/ScoreColors';
import ProfileSummary from '../components/profile/ProfileSummary';
import TableProfileRecent from '../components/profile/TableProfileRecent';

export default function Profile() {
  let { name } = useParams();
  if (!name) {
    name = localStorage.getItem('playerName');
  }

  const [entries, setEntries] = useState([]);
  const [nationality, setNationality] = useState('loading');
  const [recentScore, setRecentScore] = useState(0);
  const [classScores, setClassScores] = useState([]);
  const [countryScores, setCountryScores] = useState([]);
  useEffect(() => {
    console.log('Profile useEffect() #1 running');
    fetch(`https://data.niemann.app/dr2/index.php/leaderboard?name=${name}?limit=100`)
      .then(res => res.json())
      .then(data => {
        setEntries(data);
        setNationality(data[0]['nationality']);
        setRecentScore((data.reduce((score, datum) => {return score + datum.score}, 0) / data.length).toPrecision(3));

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

        // gets all unique values from array of objects
        let countries = [];
        data.forEach(e => {
          if (!countries.some(c => JSON.stringify(c) === JSON.stringify(e.country))) {
            countries.push(e.country);
          }
        })

        // uses array as keys for an object
        let scoredCountries = [];
        countries.forEach((c, i) => {
          let countryEntries = data.filter(e => e.country === c);
          scoredCountries[i] = {}; // need to do this or next lines will throw 'cannot set property to undefined'
          scoredCountries[i].country = c;
          scoredCountries[i].score = (countryEntries.reduce((score, datum) => {return score + datum.score}, 0) / countryEntries.length).toPrecision(3);
        })

        // sort array of objects by a value
        setCountryScores(scoredCountries.sort((a, b) => b.score - a.score))
      }
    )
  }, [name]);

  const [points, setPoints] = useState(0);
  useEffect(() => {
    console.log('Profile useEffect() #2 running');
    fetch(`https://data.niemann.app/dr2/index.php/players?name=${name}`)
      .then(res => res.json())
      .then(data => {
        setPoints(data[0].points);
      })

  }, []);



  return (
    <div className='bg-neutral-700 text-white min-h-screen'>
      <ProfileSummary name={name} nationality={nationality} recentScore={recentScore} points={points} />

      <div className="flex flex-col md:flex-row content-start">
      <div className='md:rounded-lg bg-neutral-800 w-full md:w-fit m-auto shadow-lg border-t-2 md:border-2'>
        <h3 className="text-2xl md:text-4xl text-center">Recent challenges</h3>
        <TableProfileRecent name={name} entries={entries.slice(0, 10)} />
      </div>
      
      <Link to={`/profile/${name}/challenges`} className='m-auto'>All challenges</Link>

      <div className='md:rounded-lg bg-neutral-800 w-full md:w-fit m-auto shadow-lg border-t-2 md:border-2 p-4'>
        <h3 className="text-4xl text-center">Class scores</h3>
        <table className='m-auto table-auto border-separate [border-spacing:0.75rem] w-full'>          
        <tbody>
          {classScores.map((c, i) => {
            const color = ScoreColorText(c.score);
            return (
            <tr key={i}>
              <td>{ClassStringLong(c.class)}</td>
              <td className={`${color}`}>{c.score}</td>
            </tr>
            )
          })}
        </tbody>
        </table>
      </div>

      <div className='md:rounded-lg bg-neutral-800 w-full md:w-fit m-auto shadow-lg border-t-2 md:border-2 p-4'>
        <h3 className="text-4xl text-center">Country scores</h3>
        <table className='m-auto table-auto border-separate [border-spacing:0.75rem] w-full'>          
        <tbody>
          {countryScores.map((c, i) => {
            const color = ScoreColorText(c.score);
            return (
            <tr key={i}>
              <td>{c.country}</td>
              <td className={`${color}`}>{c.score}</td>
            </tr>
            )
          })}
        </tbody>
        </table>
      </div>
      </div>

    </div>
  )
}