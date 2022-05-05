import { Link } from 'react-router-dom'

import {ClassStringShort} from '../ClassString'
import {ScoreColorText} from '../ScoreColors'

export default function MyRecents({results}) {
  return (
    <table className='table-auto'>
      <tbody>
      {results.map((r, i) => {
        const colorText = ScoreColorText(r.score)
        return (
          <tr key={i} className=''>
            <td><Link to={`/challenge/${r.id}`} className='hover:text-red-600'>#{r.id}</Link></td>
            <td className='text-center'>{ClassStringShort(r.vehicle_class)}</td>
            <td className={`${colorText} text-right`}>{r.score}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}