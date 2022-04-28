
export default function ScoreSpan({score, precision}) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return (
        <span className='text-neutral-400'>{scoreNum.toPrecision(precision)}</span>
      )
    case (scoreNum < 60):
      return (
        <span className='text-neutral-100'>{scoreNum.toPrecision(precision)}</span>
      )
    case (scoreNum < 70):
      return (
        <span className='text-green-600'>{scoreNum.toPrecision(precision)}</span>
      )
    case (scoreNum < 80):
      return (
        <span className='text-blue-500'>{scoreNum.toPrecision(precision)}</span>
      )
    case (scoreNum < 90):
      return (
        <span className='text-violet-500'>{scoreNum.toPrecision(precision)}</span>
      )
    case (scoreNum < 100):
      return (
        <span className='text-amber-500'>{scoreNum.toPrecision(precision)}</span>
      )
    default:
      return (
        <span className='text-neutral-100'></span>
      )
  }
}