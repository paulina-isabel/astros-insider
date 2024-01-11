import './PlayerDetailCard.css';
import { useParams } from 'react-router-dom';
import favorite from '../../images/favoriteastro.png';
import unfavorite from '../../images/unfavoriteastro.png';
import detailsheader from '../../images/playerdetails.png';
import { correctLastGameDate } from '../../helperFunctions';
import NoPlayer from '../NoPlayer/NoPlayer';
import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const PlayerDetailCard = ({ rosterData, addToFavoritePlayers, removeFromFavoritePlayers, favoritePlayers }) => {
  const { language } = useLanguage();
  const id = useParams();

  const player = rosterData.find((player) => {
    return player.playerID === id.id
  });

  const findPlayer = (id, favoritePlayers) => {
    return favoritePlayers.find(player => {
      return player.playerID === id
    })
  };

  const foundPlayer = findPlayer(id.id, favoritePlayers);

  return (
    <div>
    {player ? 
      <div><img src={detailsheader} className='details-header' alt='details page header'/> 
        <div className='player-detail-card'>
          <div className='player-details-headshot'>
            <img src={player.mlbHeadshot} className='details-headshot' alt={`${player.longName}`}/>
          </div>
          
          <div className='player-details-container'>
            <h2 className='player-name'>
              {player.longName} #{player.jerseyNum}
            </h2>
            <div className='player-info'>
              <div className='dob'>
                {language === 'en' 
                  ? ' DOB: '
                  : ' Fecha de Nacimiento:'
                } {player.bDay}
              </div>
              <div className='positions'>
                Bat: {player.bat}               
                {language === 'en' 
                ? ' Position:'
                : ' Posición:'
                } {player.pos} 
                {language === 'en' 
                ? ' Throw:'
                : ' Lanzamiento:'
              } {player.throw}
              </div>
              <div className='player-height-weight'>
                {language === 'en' 
                  ? ' Hieght:'
                  : ' Altura:'
                } {player.height} 
                {language === 'en' 
                ? ' Weight:'
                : ' Peso:'
                } {player.weight}lb
              </div>
            </div>
            <div className='last-game'>
              {language === 'en' 
                ? ' Date of Last Game Played: '
                : ' Fecha de Juego Mas Reciente: '
              }
              {correctLastGameDate(player.lastGamePlayed)}
            </div><br/>
            <button className='favorite-button' onClick={
              foundPlayer ? () => removeFromFavoritePlayers(foundPlayer) : () => addToFavoritePlayers(player)}>
              <img src={foundPlayer ? unfavorite : favorite} alt='add to favorites' className='add-player-to-favorites'/>
            </button>
          </div>
        </div>
      </div> : <NoPlayer />}
    </div>
  );
};

PlayerDetailCard.propTypes = {
  rosterData: PropTypes.array,
  addToFavoritePlayers: PropTypes.func,
  removeFromFavoritePlayers: PropTypes.func,
  favoritePlayers: PropTypes.array
};

export default PlayerDetailCard;