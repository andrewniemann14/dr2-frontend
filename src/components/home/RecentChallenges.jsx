import TableChallenges from '../TableChallenges';

export default function RecentChallenges({allChallenges}) {

  // TODO: show top and personal results for each challenge
  return (
    <>
      <h3 className='text-2xl text-center select-none text-cyan-600'>Recent challenges</h3>
      <TableChallenges challenges={allChallenges.slice(2)} />
    </>
  )
}
