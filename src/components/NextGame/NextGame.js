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
  console.log(formattedDate, 'formatted date')

  const todaysCard = scheduleData.find((game) => {
    console.log(game.gameDate, 'game.gameDate')
    console.log(formattedDate, 'formatted date inside finder')
      return game.gameDate === formattedDate
  })
  console.log(todaysCard)

  return (
    <GameCard 
      gameDate={correctGamesDate(todaysCard.gameDate)}
      gameTime={todaysCard.gameTime}
      gameStatus={todaysCard.gameStatus}
      away={todaysCard.away}
      home={todaysCard.home}
      key={todaysCard.gameID}
    />
  )
}

export default NextGame