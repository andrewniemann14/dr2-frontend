import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function CurrentAccordionInner({vehicleClass, stage}) {
  const [name, setName] = useState(localStorage.getItem('playerName'))
  const [pb, setPb] = useState({})
  const [record, setRecord] = useState({})

  let globalQuery = `https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}?class=${vehicleClass}?limit=1`
  let personalQuery = `https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}?class=${vehicleClass}?name=${name}`

  useEffect(() => {
    fetch(personalQuery).then(res => res.json()).then(data => {
      setPb(data[0]);
    })
  }, [name])

  useEffect(() => {
    fetch(globalQuery).then(res => res.json()).then(data => {
      setRecord(data[0]);
    })
  }, [])

  return (
    <div className="m-auto w-fit">
      {record && <Link to={`/challenge/${record.id}`}>Global record: {record.time} by {record.name}</Link>}
      {(pb && <div>Personal best: {pb.time}</div>) || <div>No previous attempt</div>}
    </div>
  )
}
