import './Games.css'
import GameCard from '../GameCard/GameCard';
import { correctGamesDate } from '../../helperFunctions';
import fullschedule from '../../images/fullschedule.png'

const Games = ({ scheduleData }) => {

  // find today's game with currentDate somehow
  // use an array method on the game data to find the date that matches today
  // then do the other stuff idk go from there girl

  const scheduleCards = scheduleData.map((game) => {
    return (
      <GameCard 
        gameDate={correctGamesDate(game.gameDate)}
        gameTime={game.gameTime}
        gameStatus={game.gameStatus}
        away={game.away}
        home={game.home}
        key={game.gameID}
      />
    )
  })

  return (
    <div className='game-card-container'>
      <img src={fullschedule} className='schedule-header' alt='schedule page header'/> 
      <div className='scrollable-wrapper'>
        {scheduleCards}
      </div>
    </div>
  )
}

export default Games;