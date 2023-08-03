import './NextGame.css'
import GameCard from '../GameCard/GameCard';
import { correctGamesDate } from '../../helperFunctions';

const NextGame = ({ scheduleData }) => {
    
  const formatDate = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return year + month + day;
  };
  
  const currentDate = new Date()  
  const formattedDate = formatDate(currentDate)
  // console.log
  const todaysCard = scheduleData.find((game) => {
    console.log(formattedDate, 'formattedDate aka todays date grabben from js')
    console.log(game.gameDate, 'game.gameDate - iteration')
    return game.gameDate === 20230807
  })

  console.log(todaysCard, 'todaysCard - the variable result from iteraton')

// if todaysCard is undefined, show error message

  return (
    <div className='todays-game-container'>
      <div className='todays-game-card-container'>
        Today's Game:<br>
        </br>
        {todaysCard ?
        <GameCard 
          gameDate={correctGamesDate(todaysCard.gameDate)}
          gameTime={todaysCard.gameTime}
          gameStatus={todaysCard.gameStatus}
          away={todaysCard.away}
          home={todaysCard.home}
          key={todaysCard.gameID}
        /> : <p>No game today - check out the full schedule page to see upcoming games.</p>}
      </div>
    </div>
  )
}

export default NextGame