import { Link } from 'react-router-dom';

function TableGlobalHiScores({entries}) {
  return (
    <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
    <thead>
      <tr className='text-center'>
        <td>Time</td>
        <td>Name</td>
        <td>Vehicle</td>
        <td>Challenge #</td>
        <td>Date</td>
      </tr>
    </thead>
    <tbody>
      {entries.map(e => {
        return(
          <tr key={`${e['name']}`} className="">
            <td className='text-center'>{e['time']}</td>
            <td className='font-bold'><Link to={`/profile/${e['name']}`} className='hover:underline'>{e['name']}</Link></td>
            <td>{e['vehicle']}</td>
            <td className='text-center'><Link to={`/challenge/${e['id']}`} className='hover:underline'>{e['id']}</Link></td>
            <td className='text-center'>{e['start'].split('T')[0]}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default TableGlobalHiScores