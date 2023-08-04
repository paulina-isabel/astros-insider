import './GameCard.css'

const GameCard = ({ gameDate, gameTime, gameStatus, away, home }) => {
  // console.log(typeof gameDate)
  return (
    <div className='game-card' tabIndex="0">
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