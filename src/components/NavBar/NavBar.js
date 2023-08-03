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
            View Current Roster
          </button>
        </Link>
        <Link to='/schedule'>
          <button className='nav-button'>
            View Game Schedule
          </button>
        </Link>
      </div>
      
    </div>
  );
}

export default NavBar;