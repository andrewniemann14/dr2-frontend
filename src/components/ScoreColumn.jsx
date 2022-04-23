
export default function ScoreColumn({score, precision}) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return (
        <td className='text-neutral-400'>{scoreNum.toPrecision(precision)}</td>
      )
    case (scoreNum < 60):
      return (
        <td className='text-neutral-100'>{scoreNum.toPrecision(precision)}</td>
      )
    case (scoreNum < 70):
      return (
        <td className='text-green-600'>{scoreNum.toPrecision(precision)}</td>
      )
    case (scoreNum < 80):
      return (
        <td className='text-blue-500'>{scoreNum.toPrecision(precision)}</td>
      )
    case (scoreNum < 90):
      return (
        <td className='text-purple-500'>{scoreNum.toPrecision(precision)}</td>
      )
    case (scoreNum < 100):
      return (
        <td className='text-amber-500'>{scoreNum.toPrecision(precision)}</td>
      )
    default:
      return (
        <td className='text-neutral-100'></td>
      )
  }
}