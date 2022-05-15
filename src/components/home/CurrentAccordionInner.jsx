import { useEffect, useState } from "react"


export default function CurrentAccordionInner({vehicleClass, stage}) {
  const [name, setName] = useState(localStorage.getItem('playerName'))
  const [pb, setPb] = useState({})
  const [record, setRecord] = useState({})

  let globalQuery = `https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}?class=${vehicleClass}`
  let personalQuery = `https://data.niemann.app/dr2/index.php/leaderboard?stage=${stage}?class=${vehicleClass}?name=${name}`

  useEffect(() => {
    fetch(personalQuery).then(res => res.json()).then(data => {
      setPb(data);
    })
  }, [name])

  useEffect(() => {
    fetch(globalQuery).then(res => res.json()).then(data => {
      setRecord(data);
    })
  }, [])

  return (
    <div className="m-auto w-fit">
      <div>Global record: {record.time} by {record.name} on </div>
      <div>Personal best: {pb.time} on </div>
    </div>
  )
}
