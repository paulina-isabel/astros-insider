import './PlayerCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlayerCard = ({ name, jerseyNum, bat, position, headshot, playerID }) => {

return (
    <Link className='playercard' to={`/roster/${playerID}`}>
      <div className='player-card' tabIndex="0">
        <div className='player-headshot'>
          <img src={headshot} className='headshot' alt={`${name}`}/>
        </div>
        <div className='player-info'>
          <h2 className='player-name'>
            {name} #{jerseyNum}
          </h2>

          <div className='positions'>
            Bat: {bat} Position: {position}
          </div>
        </div>
      </div>
    </Link>
  )
};

PlayerCard.propTypes = {
  name: PropTypes.string,
  jerseyNum: PropTypes.string,
  bat: PropTypes.string,
  position: PropTypes.string,
  headshot: PropTypes.string,
  playerID: PropTypes.string
};

export default PlayerCard;