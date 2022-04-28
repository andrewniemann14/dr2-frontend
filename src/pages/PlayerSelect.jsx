// https://tailwindui.com/components/application-ui/overlays/modals
import { useEffect, useState } from "react"


function PlayerSelect() {

  const [players, setPlayers] = useState([])
  const [filteredPlayers, setFilteredPlayers] = useState([' '])
  useEffect(() => {
    fetch('https://data.niemann.app/dr2/index.php/players?limit=10')
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
        setFilteredPlayers(data);
      })
  }, [])

  
  const filterFunction = e => {
    let inputText = e.target.value;
    
    if (inputText) {
      const results = players.filter(p => {
        return p.name.startsWith(inputText);
      })
      setFilteredPlayers(results);
    } else {
      setFilteredPlayers(players);
    }
  }

  const storeFunction = e => {
    localStorage.setItem('playerName', e.target.value);
  }


  return (
    <div className='m-auto w-fit'>
      <input type="text" onChange={filterFunction}
        className="border-2" />
        {filteredPlayers.length > 0 ? filteredPlayers.map(p => {
          return (
            <li key={p}>{p.name}</li>
          )
        }) : <p>no results</p>
        }
    </div>
  )
}

export default PlayerSelect