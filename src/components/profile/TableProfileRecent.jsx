import { Link } from 'react-router-dom';
import { ScoreColorText } from '../ScoreColors';

export default function TableProfileRecent({name, entries}) {
  
  return (
    <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
      <thead>
        <tr className='text-center'>
          <td>Challenge #</td>
          <td>Date</td>
          <td>Stage</td>
          <td>Vehicle</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>
      {entries.map(e => {
        const color = ScoreColorText(e.score);
        return(
          <tr key={`${e.id}`} className="">
            <td><Link to={`/challenge/${e['id']}`}>{e['id']}</Link></td>
            <td>{e.start.split('T')[0]}</td>
            <td><Link to={`/profile/${name}/stage/${e.stage}`}>{e.stage}</Link></td> {/* two pages: personal top 10 and global top 100 (distinct names) */}
            <td>{e.vehicle}</td>
            <td className={`${color}`}>{e.score}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}