import './Favorites.css';
import favoritesheader from '../../images/favorites.png';
import PlayerCard from '../PlayerCard/PlayerCard';
import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const Favorites = ({ favoritePlayers }) => {
  const { language } = useLanguage();
  
  const playerCards = favoritePlayers.map((player) => {
    return (      
      <PlayerCard
        name={player.longName}
        jerseyNum={player.jerseyNum}
        lastGame={player.lastGamePlayed}
        bat={player.bat}
        position={player.pos}
        headshot={player.espnHeadshot}
        playerID={player.playerID}
        key={player.playerID}
      />
    )
  })

  return (
    <div>
      <img src={favoritesheader} className='favorites-header' alt='favorites page header'/>
      <div className='player-card-container'>
        {!favoritePlayers.length ? (
          <p className='empty-message'>
            {language === 'en'
              ? 'Add a player to your favorites to see his player card here'
              : 'Agrega un jugador a tus favoritos para ver su tarjeta de jugador aquí'}
          </p>
        ) : (
          playerCards
        )}
      </div>
    </div>
  )
};

Favorites.propTypes = {
  favoritePlayers: PropTypes.array
};

export default Favorites;