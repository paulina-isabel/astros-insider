import './GameCard.css'
import humanizeDate from '../../helperFunctions'

const GameCard = ({ gameDate, gameTime, gameStatus, away, home }) => {
  // console.log(typeof gameDate)
  return (
    <div className='game-card'>
      <h2>  
        {gameDate}
      </h2>
      <p className='teams'>
        {away} @ {home}
      </p>
      <p className='time'>
        {gameTime}
      </p>
      <p className='status'>
        {gameStatus}
      </p>
    </div>
  )
}

export default GameCard