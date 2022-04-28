import { Link } from 'react-router-dom'

import ScoreSpan from "../ScoreSpan"

export default function MyRecents({results}) {
  return (
    <ul>
      {results.map((r, i) => {
        return (
          <li key={i} className='flex flex-row justify-between'>
            <Link to={`/challenge/${r.id}`} className='hover:text-red-600 hover:underline'>{r.id}</Link>
            <ScoreSpan score={r.score} precision={3} />
          </li>
        )
      })}
    </ul>
  )
}