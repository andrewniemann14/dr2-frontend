
import {ScoreColorStroke, ScoreColorText} from '../ScoreColors'
import {ReactComponent as ScoreSvg} from '../../img/score-and-podium.svg'

export default function ScoreDisplay({score, precision, points}) {
  const colorStroke = ScoreColorStroke(score);
  const colorText = ScoreColorText(score);
  return (
    <div>
      <p className={`relative top-20 text-center text-5xl ${colorText}`}>{score}</p>
      <ScoreSvg className={`h-48 fill-neutral-900 stroke-[4] ${colorStroke}`} />
      <p className='relative bottom-10 text-center text-lg text-neutral-200'>{Math.floor(points)}</p>
    </div>
  )
}