import './PlayerCard.css'
import { correctLastGameDate } from '../../helperFunctions'


const PlayerCard = ({ name, jerseyNum, lastGame, bat, position, headshot }) => {
  console.log(lastGame)
return (
    <div className='player-card' tabindex="0">
      <div className='player-headshot'>
        <img src={headshot} className='headshot'/>
      </div>
      <div className='player-info'>
        <h2 className='player-name'>
          {name} #{jerseyNum}
        </h2>
        <div className='last-game'>
          Last Game Played:<br/>{correctLastGameDate(lastGame)}
        </div><br/>
        <div className='positions'>
          Bat: {bat} Position: {position}
        </div>
      </div>
    </div>
  )
}

export default PlayerCard