import GameCard from '../GameCard/GameCard';
import { correctGamesDate } from '../../helperFunctions';
import fullschedule from '../../images/fullschedule.png';
import PropTypes from 'prop-types';

const Games = ({ scheduleData }) => {

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
};

Games.propTypes = {
  scheduleData: PropTypes.array
};

export default Games;