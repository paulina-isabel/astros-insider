import './Favorites.css'
import PlayerCard from '../PlayerCard/PlayerCard';

const Favorites = ({ favoritePlayers }) => {

  console.log(favoritePlayers, 'fav players should not be undefined bc we are setting the state to an empty array omg')
  
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
    <div className='player-card-container'>
      {!favoritePlayers ? <p className='empty-message'> Add a player to your favorites to see his player card here!</p> : playerCards}
    </div>
  )
}

export default Favorites