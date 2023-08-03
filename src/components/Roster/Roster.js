import './Roster.css'
import { useEffect, useState } from 'react';
import getData from '../.././apiCalls/apiCalls';
import rosterheader from '../../images/currentroster.png'
import PlayerCard from '../PlayerCard/PlayerCard';

const Roster = ({ rosterData }) => {

  const playerCards = rosterData.map((player) => {
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
      <img src={rosterheader} className='roster-header' alt='roster page header'/> 
      <div className='roster-container'>
        {playerCards}
      </div>
    </div>
  )
}

export default Roster