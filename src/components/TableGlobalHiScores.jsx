import { Link } from 'react-router-dom';

function TableGlobalHiScores({entries}) {
  return (
    <table className='m-auto table-auto border-separate [border-spacing:0.75rem]'>
    <thead>
      <tr>
        <td>Challenge #</td>
        <td>Date</td>
        <td>Vehicle</td>
        <td>Time</td>
        {/* <td>Placement</td>
        <td>Score</td> */}
      </tr>
    </thead>
    <tbody>
      {entries.map(e => {
        return(
          <tr key={`${e['name']}`} className="">
            <td><Link to={`/challenge/${e['id']}`}>{e['id']}</Link></td>
            <td>{e['start'].split('T')[0]}</td>
            <td>{e['vehicle']}</td>
            <td>{e['time']}</td>
            {/* <td>{e['placement']}</td>
            <td>{e['score']}</td> */}
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default TableGlobalHiScores