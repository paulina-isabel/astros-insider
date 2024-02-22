import PlayerCard from '../PlayerCard/PlayerCard';
import PropTypes from 'prop-types';

const Roster = ({ rosterData }) => {
  const playerCards = rosterData.map((player) => {
    return (      
        <PlayerCard
          name={player.longName}
          jerseyNum={player.jerseyNum}
          lastGame={player.lastGamePlayed}
          bat={player.bat}
          position={player.pos}
          headshot={player.mlbHeadshot}
          playerID={player.playerID}
          key={player.playerID}
        />
      );
    });

  return (
    <div className='roster-container'>
      {playerCards}
    </div>
  );
};

Roster.propTypes = {
  rosterData: PropTypes.array
};

export default Roster;