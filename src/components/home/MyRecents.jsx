import { Link } from 'react-router-dom'

import ScoreSpan from "../ScoreSpan"

export default function MyRecents({results}) {
  return (
    <table className='table-auto'>
      <tbody>
      {results.map((r, i) => {
        return (
          <tr key={i} className=''>
            <td><Link to={`/challenge/${r.id}`} className='hover:text-red-600 hover:underline'>{r.id}</Link></td>
            <td><ScoreSpan score={r.score} precision={3} /></td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}