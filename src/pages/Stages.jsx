// TODO: as with most table pages, mobile view is all messed up

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { classes, countries, stages } from '../components/data'
import { ClassStringLong } from '../components/ClassString';
import { CountryStringLong } from '../components/CountryString';
import StageHeader from '../components/stage/StageHeader';
import TableHighScores from '../components/stage/TableHighScores';

// state={{stage: c.stage}}

export default function Stages() {
  const [country, setCountry] = useState('eLngArgentina');
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState(localStorage.getItem('playerName'))
  const [personal, setPersonal] = useState(false)
  const [stage, setStage] = useState();
  const [vehicleClass, setVehicleClass] = useState('all');


  useEffect(() => {
    console.log('Stages useEffect() running');
    let allOrNot = vehicleClass !== 'all' ? `?class=${vehicleClass}?limit=10` : '';
    let globalQuery = `https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}${allOrNot}`
    let personalQuery = `https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}?name=${name}`
    fetch(personal ? personalQuery : globalQuery)
      .then(res => res.json())
      .then(data => {
        setEntries(data);
        // setCountry(data[0]['country']);
      })
  }, [name, personal, stage, vehicleClass]);



  return (
    <>
      <div className='flex justify-center space-x-1'>
        <div className='flex flex-col'>
          <h4 className='mt-4 text-center'>Country</h4>
          <select onChange={e => setCountry(e.target.value)} className='bg-neutral-800 cursor-pointer h-8 w-28'> {/* can make the onChange a prop with a custom component */}
            {countries.map(c => {
              return <option value={c}>{CountryStringLong(c)}</option>
            })}
          </select>
        </div>
        <div className='flex flex-col'>
          <h4 className='mt-4 text-center'>Stage</h4>
          <select onChange={e => setStage(e.target.value)} className='bg-neutral-800 cursor-pointer h-8 w-64'> {/* can make the onChange a prop wit ha custom component */}
            {stages.filter(s => s.country === country).map(s => {
              return <option value={s.stage}>{s.stage}</option>
            })}
          </select>
          <p className='text-xs'>* special characters broken at the moment</p>
        </div>
        <div className='flex flex-col'>
          <h4 className='mt-4 text-center'>Class</h4>
          <select onChange={e => setVehicleClass(e.target.value)} className='bg-neutral-800 cursor-pointer h-8 w-24'> {/* can make the onChange a prop wit ha custom component */}
            <option value={'all'}>All</option>
            {classes.map(c => {
              return <option value={c}>{ClassStringLong(c)}</option>
            })}
          </select>
        </div>
        {/* TODO: entries are getting added instead of replaced when personal is toggled */}
        <input type="checkbox" onChange={() => setPersonal(!personal)} />
      </div>
      <TableHighScores entries={entries} allClasses={vehicleClass === 'all'} />
    </>
  )
}