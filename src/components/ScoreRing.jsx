export default function ScoreRing({score, precision, points}) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return (
        <>
        <div className="text-neutral-400 border-neutral-400 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
        <p className="bg-neutral-400 text-neutral-800 font-oswald text-[.25em] text-center relative bottom-[1em] rounded-t-full">{points}</p>
        </>
      )
    case (scoreNum < 60):
      return (
        <>
        <div className="text-neutral-100 border-neutral-100 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
        <p className="bg-neutral-100 text-neutral-800 font-oswald text-[.25em] text-center relative bottom-[1em] rounded-t-full">{points}</p>
        </>
      )
    case (scoreNum < 70):
      return (
        <>
        <div className="text-green-600 border-green-600 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
        <p className="bg-green-600 text-neutral-800 font-oswald text-[.25em] text-center relative bottom-[1em] rounded-t-full">{points}</p>
        </>
      )
    case (scoreNum < 80):
      return (
        <>
        <div className="text-blue-600 border-blue-600 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
        <p className="bg-blue-600 text-neutral-800 font-oswald text-[.25em] text-center relative bottom-[1em] rounded-t-full">{points}</p>
        </>
      )
    case (scoreNum < 90):
      return (
        <>
        <div className="text-violet-700 border-violet-700 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
        <p className="bg-violet-700 text-neutral-800 font-oswald text-[.25em] text-center relative bottom-[1em] rounded-t-full">{points}</p>
        </>
      )
    case (scoreNum <= 100):
      return (
        <>
        <div className="text-amber-600 border-amber-600 bg-neutral-900 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
        <p className="bg-amber-600 text-neutral-800 font-oswald text-[.25em] text-center relative bottom-[1em] rounded-t-full">{points}</p>
        </>
      )
    default:
      return (
        <>
        <div className="text-stone-300 border-stone-300 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
        </div>
        <p className="bg-stone-300 text-neutral-800 font-oswald text-[.25em] text-center relative bottom-[1em] rounded-t-full">error</p>
        </>
      )
  }
}