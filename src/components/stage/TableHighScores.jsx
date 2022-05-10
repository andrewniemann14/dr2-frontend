import { Link } from 'react-router-dom';

import { ClassStringLong } from '../ClassString'

function TableGlobalHiScores({entries, allClasses}) {
  console.log(allClasses);
  return (
    <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
    <thead>
      <tr className='text-center'>
        <td>Name</td>
        <td>Time</td>
        {allClasses && <td>Class</td>}
        <td>Vehicle</td>
        <td>Challenge #</td>
        <td>Date</td>
      </tr>
    </thead>
    <tbody>
      {entries.map(e => {
        return(
          <tr key={`${e.name}`} className="">
            <td className='font-bold'><Link to={`/profile/${e.name}`} className='hover:text-red-600'>{e.name}</Link></td>
            <td className='text-center'>{e.time}</td>
            {allClasses && <td className='text-center text-teal-500'>{ClassStringLong(e.vehicle_class)}</td>}
            <td>{e.vehicle}</td>
            <td className='text-center'><Link to={`/challenge/${e.id}`} className='hover:text-red-600'>{e.id}</Link></td>
            <td className='text-center'>{e['start'].split('T')[0]}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default TableGlobalHiScores