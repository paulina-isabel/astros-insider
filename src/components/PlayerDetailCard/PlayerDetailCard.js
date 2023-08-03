import './PlayerDetailCard.css'
import { useParams } from 'react-router-dom';
import { correctLastGameDate } from '../../helperFunctions'

const PlayerDetailCard = ({ rosterData }) => {
  
  const id = useParams()

  const player = rosterData.find((player) => {
    console.log(typeof player.playerID)
    return player.playerID === id.id
  })

  console.log(rosterData, 'rosterData in PlayerDetailCard')

  console.log(typeof player.headshot, 'type of player')
  console.log(player, 'player')
  console.log(typeof id, 'id')

  return (
    <div className='player-detail-card'>
      <div className='player-headshot'>
        <img src={player.headshot} className='headshot'/>
      </div>
        <div className='player-info'>
        <h2 className='player-name'>
          {player.name} #{player.jerseyNum}
        </h2>
        <div className='last-game'>
          {/* Last Game Played:<br/>{correctLastGameDate(player.lastGame)} */}
        </div><br/>
        <div className='positions'>
          Bat: {player.bat} Position: {player.position}
        </div>
      </div>
    </div>
  )
}


export default PlayerDetailCard