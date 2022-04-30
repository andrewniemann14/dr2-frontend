
import ScoreDisplay from './ScoreDisplay'

const tryRequire = (natString) => {
  try {
    return require(`../../img/flags/${natString}.png`)
  } catch {
    return require(`../../img/flags/eLngRestOfWorld.png`)
  }
}

export default function ProfileSummary({name, nationality, recentScore, points}) {
  return (
    <div className="m-auto w-fit">
      <div className='flex flex-col md:flex-row items-center p-2 m-auto'>
        <ScoreDisplay score={recentScore} points={points} />
        {/* name + details div */}
        <div className='ml-4'>
          <h1 className='text-3xl sm:text-7xl text-center'>{name}</h1>
          {/* details div */}
          <div className="m-4">
            <div className="flex">
              <p>Nationality:</p>
              <img src={tryRequire(nationality)} alt={`${nationality} flag`} className='h-4 w-8 ml-2 self-center' />
            </div>
            <p className=''>Lifetime points: {Math.floor(points)}</p>
          </div>
        </div>


      </div>
    </div>
  )
}