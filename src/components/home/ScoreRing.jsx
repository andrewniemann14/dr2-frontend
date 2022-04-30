import { ScoreColorBorder, ScoreColorText } from "../ScoreColors";

export default function ScoreRing({score, precision}) {
  const scoreNum = Number(score);
  const textColor = ScoreColorText
  const borderColor = ScoreColorBorder
  switch (true) {
    case (scoreNum < 50):
      return (
        <div className="text-neutral-400 border-neutral-400 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 60):
      return (
        <div className="text-neutral-100 border-neutral-100 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 70):
      return (
        <div className="text-green-600 border-green-600 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 80):
      return (
        <div className="text-blue-600 border-blue-600 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum < 90):
      return (
        <div className="text-violet-700 border-violet-700 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    case (scoreNum <= 100):
      return (
        <div className="text-amber-600 border-amber-600 bg-neutral-900 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
          <div className='text-center font-oswald mb-[-2em]'>{scoreNum.toPrecision(precision)}</div>
        </div>
      )
    default:
      return (
        <div className="text-stone-300 border-stone-300 bg-neutral-800 border-[.1em] rounded-full h-0 w-[2em] pb-[2em] flex items-center justify-center">
        </div>
      )
  }
}