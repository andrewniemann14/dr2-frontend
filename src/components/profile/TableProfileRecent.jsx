import { Link } from 'react-router-dom';
import {ClassStringLong} from '../ClassString';
import { ScoreColorText } from '../ScoreColors';

export default function TableProfileRecent({name, entries}) {
  
  return (
    <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
      <thead>
        <tr className='text-center'>
          <td>Challenge #</td>
          <td className='hidden md:visible'>Date</td>
          <td>Country</td>
          <td className='hidden md:visible'>Stage</td>
          <td>Class</td>
          <td className='hidden md:visible'>Vehicle</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>
      {entries.map(e => {
        const color = ScoreColorText(e.score);
        return(
          <tr key={`${e.id}`} className="">
            <td><Link to={`/challenge/${e['id']}`}>{e['id']}</Link></td>
            <td className='hidden md:visible'>{e.start.split('T')[0]}</td>
            <img src={require(`../../img/flags/${e.country}.png`)} alt={`${e.country} flag`} className='h-4 w-8' />
            <td className='hidden md:visible'><Link to={`/profile/${name}/stage/${e.stage}`}>{e.stage}</Link></td> {/* two pages: personal top 10 and global top 100 (distinct names) */}
            <td>{ClassStringLong(e.vehicle_class)}</td>
            <td className='hidden md:visible'>{e.vehicle}</td>
            <td className={`${color}`}>{e.score}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}