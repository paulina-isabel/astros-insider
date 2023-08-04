import './PlayerCard.css'
import { correctLastGameDate } from '../../helperFunctions'
import { Link } from 'react-router-dom'


const PlayerCard = ({ name, jerseyNum, bat, position, headshot, playerID }) => {
  // console.log(lastGame)
return (
    <Link className='playercard' to={`/roster/${playerID}`}>
      <div className='player-card' tabIndex="0">
        <div className='player-headshot'>
          <img src={headshot} className='headshot' alt={`${name}`}/>
        </div>
        <div className='player-info'>
          <h2 className='player-name'>
            {name} #{jerseyNum}
          </h2>

          <div className='positions'>
            Bat: {bat} Position: {position}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PlayerCard