import './GameCard.css';
import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const GameCard = ({ gameDate, gameTime, gameStatus, away, home }) => {
  const { language } = useLanguage();

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
        {language === 'en' 
        ? gameStatus 
        : (
            gameStatus === 'scheduled' 
            ? 'ajendado' 
            : 'completo'
          )
        }
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