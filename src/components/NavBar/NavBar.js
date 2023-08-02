import './NavBar.css'
import astrosLogo from '../../images/astrosLogo.png'
import astrosInsiderLogo from '../../images/astrosInsiderLogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>

      <div className='logo-container'>
        <Link className='logo-link' to='/'><img src={astrosLogo} className='logolink-img'/></Link>
        <Link className='logo-link' to='/'><img src={astrosInsiderLogo} className='logolink-img'/></Link>
      </div>

      <div className='nav-button-wrapper'>
        <Link to='/roster'>
          <button className='nav-button'>
            View Full Roster
          </button>
        </Link>
        <button className='nav-button'>
          View Full Schedule
        </button>
      </div>
      
    </div>
  );
}

export default NavBar;