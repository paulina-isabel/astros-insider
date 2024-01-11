import './NextGame.css';
import GameCard from '../GameCard/GameCard';
import AstrosOffMessage from '../AstrosOffMessage/AstrosOffMessage';
import todaysgame from '../../images/todaysgame.png';
import wanthouston from '../../images/wanthouston.png';
import { correctGamesDate } from '../../helperFunctions';
import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const NextGame = ({ scheduleData }) => {
  const { language } = useLanguage();
  
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
      <p className='welcome-message'> 
      {language === 'en' 
        ? 'Welcome to Astros Insider, where you can access the full 2024 season game schedule and view the current team roster. Updates daily. Add a player to your favorites from the player\'s individual detail page to personalize your experience. Go \'Stros.' 
        : 'Bienvenido a Astros Insider, donde puedes acceder al calendario completo de juegos de la temporada 2024 y ver la lista de jugadores actual del equipo. El calendario y lista son actualizados diario. Agrega un jugador a tus favoritos desde la página de detalles individuales de cualquier jugador para personalizar tu experiencia. ¡Vamos, Astros!'
      }
        <br></br>
        <br></br>
        {/* <img src={wanthouston} className='we-want-houston' alt='we want houston'/> */}
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