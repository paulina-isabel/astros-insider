import './PlayerCard.css'
import { humanizeDate } from '../../helperFunctions'


const PlayerCard = ({ name, jerseyNum, lastGame, bat, position, headshot }) => {
return (
<div className='player-card'>
<div className='player-name'>
{name} #{jerseyNum}
</div>
<div className='last-game'>
{humanizeDate(lastGame)}
</div>
<div className='positions'>
Bat: {bat} Position: {position}
</div>
</div>
)
}


export default PlayerCard