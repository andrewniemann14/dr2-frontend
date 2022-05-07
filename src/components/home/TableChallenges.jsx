import { Link } from 'react-router-dom';
import {ClassStringLong} from '../ClassString';

export default function TableChallenges({challenges}) {
  return (
    <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
    <thead>
      <tr>

      </tr>
    </thead>
    <tbody>
    {challenges.map(c => {
      return(
        <tr key={`${c['id']}`} className="">
          <td><Link to={`/challenge/${c['id']}`} className='hover:underline hover:text-red-600'>{c['id']}</Link></td>
          <td>{c['start'].split('T')[0]}</td>
          <td><img src={require(`../../img/flags/${c['country']}.png`)} alt={`${c['country']} flag`} className='h-4 w-8' /></td>
          <td className=''>{ClassStringLong(c.vehicle_class)}</td>
          <td><Link to={`/stage/${c['stage']}`} className='hover:underline hover:text-red-600'>{c['stage']}</Link></td>
        </tr>
      )
    })}
    </tbody>
  </table>
  )
}