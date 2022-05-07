import TableChallenges from './TableChallenges';

export default function CurrentChallenges({allChallenges, name}) {

  // TODO: show global record, personal best for each stage+class combo
  return (
    <>
      <h3 className='text-2xl text-center select-none text-cyan-600'>Current challenges</h3>
      <TableChallenges challenges={allChallenges.slice(0,2)} />
    </>
  )
}