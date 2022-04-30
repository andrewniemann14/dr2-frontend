import { Link } from 'react-router-dom'

import {ScoreColorText} from '../ScoreColors'

export default function MyRecents({results}) {
  return (
    <table className='table-auto'>
      <tbody>
      {results.map((r, i) => {
        const colorText = ScoreColorText(r.score)
        return (
          <tr key={i} className=''>
            <td><Link to={`/challenge/${r.id}`} className='hover:text-red-600 hover:underline'>{r.id}</Link></td>
            <td className={`${colorText}`}>{r.score}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}