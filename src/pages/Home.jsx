// TODO: learn and use status == loading in all pages
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    console.log('Profile useEffect() running');
    fetch(`https://data.niemann.app/dr2/index.php/challenges?limit=12`)
      .then(res => res.json())
      .then(data => setChallenges(data))
  }, []);


  return (
    <div>
      <div className="h-64 w-full text-center flex flex-col justify-center">
        <h1 className='text-5xl'>DiRT Rally 2.0</h1>
        <h2 className='text-6xl'>Dashboard</h2>
      </div>
      <br />
      <h3 className='text-2xl text-center'>Current challenges</h3>
      <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
        <thead>
          <tr>

          </tr>
        </thead>
        <tbody>
        {challenges.slice(0,2).map(c => {
          console.log(c);
          return(
            <tr key={`${c['id']}`} className="">
              <td><Link to={`/challenge/${c['id']}`}>{c['id']}</Link></td>
              <td>{c['start'].split('T')[0]}</td>
              <td>{c['country'].slice(1)}</td>
              <td><Link to={`/stage/${c['stage']}`}>{c['stage']}</Link></td> {/* two pages: personal top 10 and global top 100 (distinct names) */}
              <td>{c['vehicle_class'].split('eRally')[1].split('Caps')[0]}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <br />
      <h3 className='text-2xl text-center'>Recent challenges</h3>
      <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
        <thead>
          <tr>

          </tr>
        </thead>
        <tbody>
        {challenges.slice(2).map(c => {
          console.log(c);
          return(
            <tr key={`${c['id']}`} className="">
              <td><Link to={`/challenge/${c['id']}`}>{c['id']}</Link></td>
              <td>{c['start'].split('T')[0]}</td>
              <td>{c['country'].slice(1)}</td>
              <td><Link to={`/stage/${c['stage']}`} params>{c['stage']}</Link></td> {/* two pages: personal top 10 and global top 100 (distinct names) */}
              <td>{c['vehicle_class'].split('eRally')[1].split('Caps')[0]}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Home