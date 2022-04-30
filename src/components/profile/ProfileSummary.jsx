import ScoreRing from "../ScoreRing"

const tryRequire = (natString) => {
  try {
    return require(`../../img/flags/${natString}.png`)
  } catch {
    return require(`../../img/flags/eLngRestOfWorld.png`)
  }
}

const ProfileSummary = ({name, nationality, recentScore, points}) => {
  return (
    <div className="m-auto w-fit">
      <div className='md:flex flex-row items-center p-2 m-auto'>
          
        <img src={tryRequire(nationality)} alt={`${nationality} flag`}className='h-8 md:h-12 block' />  
        <h1 className='text-3xl sm:text-7xl text-center ml-2 mr-8'>{name}</h1>
        
        <div className="text-4xl lg:text-7xl mb-[-.25em]">
          <ScoreRing score={recentScore} precision={3} points={Math.floor(points)} />
        </div>

      </div>
    </div>
  )
}

export default ProfileSummary