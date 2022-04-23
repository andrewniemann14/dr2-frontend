import ScoreRing from "./ScoreRing"

const ProfileSummary = ({name, nationality, recentScore, points}) => {
  return (
    <div className="m-auto w-fit">
      <div className='flex flex-row items-center p-2 m-auto'>
        <img src={require(`../../img/flags/${nationality}.png`)} alt={`${nationality} flag`}
          className='h-12 block' />
        <h1 className='text-4xl sm:text-7xl text-center ml-2 mr-8'>{name}</h1>
        
        {/* SCORE */}
        <div className="text-4xl lg:text-7xl">
          <ScoreRing score={recentScore} precision={3} />
        </div>

      </div>
      <p>{points}</p>
    </div>
  )
}

export default ProfileSummary