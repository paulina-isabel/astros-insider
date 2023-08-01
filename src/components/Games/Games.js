import './Games.css'
import GameCard from '../GameCard/GameCard';

const HomeGames = ({ scheduleData }) => {

  const findCurrentWeekGames = () => {
    const currentWeekGames = scheduleData
  }
  
  const currentDate = new Date().toString().slice(4, 15);
  console.log(currentDate, 'current date v')

  // find today's game with currentDate somehow
  // use an array method on the game data to find the date that matches today
  // then do the other stuff idk go from there girl

  const scheduleCards = scheduleData.map((game) => {
    // console.log(typeof game.gameDate)
    return (
      <GameCard 
        gameDate={game.gameDate}
        gameTime={game.gameTime}
        gameStatus={game.gameStatus}
        away={game.away}
        home={game.home}
        key={game.gameID}
      />
    )
  })

  // const thisWeeksCards = scheduleData.find(())


  return (
    <div className='game-card-container'>
      <div className='scrollable-wrapper'>
        {scheduleCards}
      </div>
    </div>
  )
}

export default HomeGames;