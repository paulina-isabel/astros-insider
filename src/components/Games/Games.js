import './Games.css'
import GameCard from '../GameCard/GameCard';
import { cleanScheduleData } from '../../helperFunctions';
import { humanizeDate } from '../../helperFunctions';

const Games = ({ scheduleData }) => {
  
  const formatDate = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return year + month + day;
  };
  
  const currentDate = new Date()  
  const formattedDate = formatDate(currentDate)
  console.log(formattedDate, 'formatted date')

  // find today's game with currentDate somehow
  // use an array method on the game data to find the date that matches today
  // then do the other stuff idk go from there girl

  const scheduleCards = scheduleData.map((game) => {
    return (
      <GameCard 
        gameDate={humanizeDate(game.gameDate)}
        gameTime={game.gameTime}
        gameStatus={game.gameStatus}
        away={game.away}
        home={game.home}
        key={game.gameID}
      />
    )
  })

const todaysCard = scheduleData.find((game) => {
    console.log(game.gameDate, 'game.gameDate')
    console.log(formattedDate, 'formatted date inside finder')
      return game.gameDate === formattedDate
})
console.log(todaysCard)

  return (
    <div className='game-card-container'>
      <div className='scrollable-wrapper'>
        {scheduleCards}
      </div>
    </div>
  )
}

export default Games;