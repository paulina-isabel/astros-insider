import './Roster.css'
import { useEffect, useState } from 'react';
import getData from '../.././apiCalls/apiCalls';
import PlayerCard from '../PlayerCard/PlayerCard';

const Roster = () => {

  const [rosterData, setRosterData] = useState([])

  const rosterEndpoint = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamID=11'


  useEffect(() => {
    getData(rosterEndpoint)
    .then(data =>
      setRosterData(data.body.roster)
    )
  }, [])


  console.log(rosterData)


  const playerCards = rosterData.map((player) => {
  return (
      <PlayerCard
      name={player.longName}
      jerseyNum={player.jerseyNum}
      lastGame={player.lastGamePlayed}
      bat={player.bat}
      position={player.pos}
      headshot={player.espnHeadshot}
      />
    )
  })


return (
    <div>
      {playerCards}
    </div>
  )
}


export default Roster
