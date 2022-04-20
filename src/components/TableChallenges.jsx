import { Link } from 'react-router-dom';

function TableChallenges({challenges}) {
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
          <td><Link to={`/challenge/${c['id']}`}>{c['id']}</Link></td>
          <td>{c['start'].split('T')[0]}</td>
          <td>{c['country'].slice(1)}</td>
          <td><Link to={`/stage/${c['stage']}`}>{c['stage']}</Link></td>
          <td>{c['vehicle_class'].split('eRally')[1].split('Caps')[0]}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
  )
}

export default TableChallenges