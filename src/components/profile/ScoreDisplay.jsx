
import {ScoreColorStroke, ScoreColorText} from '../ScoreColors'
import {ReactComponent as ScoreSvg} from '../../img/score.svg'
// import {ReactComponent as ScoreSvg} from '../../img/score-and-podium.svg'

export default function ScoreDisplay({score, precision, points}) {
  const colorStroke = ScoreColorStroke(score);
  const colorText = ScoreColorText(score);
  return (
    <div>
      <p className={`relative top-[6.5rem] text-center font-oswald text-6xl ${colorText}`}>{score}</p>
      <ScoreSvg className={`h-48 fill-neutral-900 stroke-[5] ${colorStroke}`} />
    </div>
    // <div>
    //   <p className={`relative top-20 text-center text-5xl ${colorText}`}>{score}</p>
    //   <ScoreSvg className={`h-48 fill-neutral-900 stroke-[4] ${colorStroke}`} />
    //   <p className='relative bottom-10 text-center text-lg text-neutral-200'>{Math.floor(points)}</p>
    // </div>
  )
}