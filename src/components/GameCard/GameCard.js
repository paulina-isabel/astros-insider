import './GameCard.css';
import PropTypes from 'prop-types';

const GameCard = ({ gameDate, gameTime, gameStatus, away, home }) => {

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
};

GameCard.propTypes = {
  gameDate: PropTypes.string,
  away: PropTypes.string,
  home: PropTypes.string,
  gameTime: PropTypes.string,
  gameStatus: PropTypes.string
};

export default GameCard;