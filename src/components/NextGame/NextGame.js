import './NextGame.css';
import GameCard from '../GameCard/GameCard';
import AstrosOffMessage from '../AstrosOffMessage/AstrosOffMessage';
import todaysgame from '../../images/todaysgame.png';
import wanthouston from '../../images/wanthouston.png';
import { correctGamesDate } from '../../helperFunctions';
import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const NextGame = ({ scheduleData }) => {

  const { language, toggleLanguage } = useLanguage();
    
  const formatDate = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return year + month + day;
  };
  
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const todaysCard = scheduleData.find((game) => {
    return game.gameDate === formattedDate
  });

  return (
    <div className='todays-game-card-container'>
          <div>
            <p>{language === 'en' ? 'Hello' : 'Hola'}</p>
            <button onClick={toggleLanguage}>Toggle Language</button>
          </div>
      <p className='welcome-message'> 
        Welcome to Astros Insider, where you can access the full 2023 season game schedule and view the current team roster. Updates daily. Add a player to your favorites from the player's individual detail page to personalize your experience. Go 'Stros.<br></br>
        <br></br>
        <img src={wanthouston} className='we-want-houston' alt='we want houston'/>
      </p>
      <div className='homepage-content'>
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
    </div>
  );
};

NextGame.propTypes = {
  scheduleData: PropTypes.array
};

export default NextGame;