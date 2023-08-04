import './PlayerDetailCard.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { correctLastGameDate } from '../../helperFunctions';

const PlayerDetailCard = ({ rosterData, addToFavoritePlayers, removeFromFavoritePlayers, favoritePlayers }) => {
  
  const id = useParams()

  const player = rosterData.find((player) => {
    // console.log(typeof player.playerID)
    return player.playerID === id.id
  })

  // player variable is chosen product details basically

  // need to check if the product is saved

  const findPlayer = (id, favoritePlayers) => {
      return favoritePlayers.find(player => {
        return player.playerID === id
      })
  }

  // console.log(typeof id, 'consoleing the id we set with params')
  // console.log(typeof player.playerID, 'consoleing the player.id that should be something allegedly idk')

  // console.log(window.localStorage, 'local storage')
  console.log(favoritePlayers, 'fav players should not be undefined bc we are setting the state to an empty array omg')

  const foundPlayer = findPlayer(id.id, favoritePlayers)

  // console.log(foundPlayer, 'found player should be undefined')

  // console.log(rosterData, 'rosterData in PlayerDetailCard')
  // console.log(player, 'player')
  // console.log(typeof id, 'id')

  return (
    <div className='player-detail-card'>
 
      <div className='player-details-headshot'>
        <img src={player.espnHeadshot} className='details-headshot'/>
      </div>
      
      <div>
        <h2 className='player-name'>
          {player.longName} #{player.jerseyNum}
        </h2>
        <div className='player-info'>
          <div className='dob'>
            DOB: {player.bDay}
          </div>
          <div className='positions'>
            Bat: {player.bat} Position: {player.pos} Throw: {player.throw}
          </div>
          <div className='player-height-weight'>
            Height: {player.height} Weight: {player.weight}lb
          </div>
        </div>
        <div className='last-game'>
            Last Game Played:<br/>{correctLastGameDate(player.lastGamePlayed)}
          </div><br/>
        <button className='favorite-button' onClick={
          foundPlayer ? () => removeFromFavoritePlayers(foundPlayer) : () => addToFavoritePlayers(player)
        }> Button </button>
      </div>

    </div>
  )
}


export default PlayerDetailCard