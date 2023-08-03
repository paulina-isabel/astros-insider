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
  console.log(player, 'player')
  console.log(typeof id, 'id')

  return (
    <div className='player-detail-card'>

      <div className='player-details-headshot'>
        <img src={player.espnHeadshot} className='details-headshot'/>
      </div>
      
      <div>
          <h2 className='player-name'>
            {player.longName} #{player.jerseyNum}
          </h2>
        <div className='player-info'>
          <div className='dob'>
            DOB: {player.bDay}
          </div>
          <div className='positions'>
            Bat: {player.bat} Position: {player.pos} Throw: {player.throw}
          </div>
          <div className='player-height-weight'>
            Height: {player.height} Weight: {player.weight}lb
          </div>
        </div>
      </div>

    </div>
  )
}


export default PlayerDetailCard