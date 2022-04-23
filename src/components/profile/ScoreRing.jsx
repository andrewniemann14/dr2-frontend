export default function ScoreRing({score, precision}) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return (
        <div className="text-neutral-400 border-neutral-400 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 60):
      return (
        <div className="text-neutral-100 border-neutral-100 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 70):
      return (
        <div className="text-green-600 border-green-600 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 80):
      return (
        <div className="text-blue-600 border-blue-600 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 90):
      return (
        <div className="text-purple-600 border-purple-600 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 100):
      return (
        <div className="text-amber-600 border-amber-600 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    default:
      return (
        <div className="text-stone-300 border-stone-300 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          
        </div>
      )
  }
}