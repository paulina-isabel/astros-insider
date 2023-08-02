import './PlayerCard.css'
import { humanizeDate, correctLastGameDate } from '../../helperFunctions'


const PlayerCard = ({ name, jerseyNum, lastGame, bat, position, headshot }) => {
  console.log(lastGame)
return (
    <div className='player-card' tabindex="0">
      <div className='player-headshot'>
        <img src={headshot} className='headshot'/>
      </div>
      <div className='player-info'>
        <div className='player-name'>
          {name} #{jerseyNum}
        </div>
        <div className='last-game'>
          Last Game Played: {correctLastGameDate(lastGame)}
        </div>
        <div className='positions'>
          Bat: {bat} Position: {position}
        </div>
      </div>
    </div>
  )
}


export default PlayerCard