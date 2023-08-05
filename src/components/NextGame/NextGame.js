import './NextGame.css';
import GameCard from '../GameCard/GameCard';
import AstrosOffMessage from '../AstrosOffMessage/AstrosOffMessage';
import todaysgame from '../../images/todaysgame.png';
import { correctGamesDate } from '../../helperFunctions';
import PropTypes from 'prop-types';

const NextGame = ({ scheduleData }) => {
    
  const formatDate = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return year + month + day;
  }
  
  const currentDate = new Date()  
  const formattedDate = formatDate(currentDate)

  const todaysCard = scheduleData.find((game) => {
    return game.gameDate === 20230807
  })


  return (
    <div className='todays-game-card-container'>
      <img src={todaysgame} className='todays-game-header' alt='todays game page header'/> 
      {todaysCard ?
      <GameCard 
        gameDate={correctGamesDate(todaysCard.gameDate)}
        gameTime={todaysCard.gameTime}
        gameStatus={todaysCard.gameStatus}
        away={todaysCard.away}
        home={todaysCard.home}
        key={todaysCard.gameID}
      /> : <AstrosOffMessage />}
    </div>
  )
};

NextGame.propTypes = {
  scheduleData: PropTypes.array
};

export default NextGame;