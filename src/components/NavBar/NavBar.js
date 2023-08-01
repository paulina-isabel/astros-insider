import './NavBar.css'
import astrosLogo from '../../images/astrosLogo.png'
import astrosInsiderLogo from '../../images/astrosInsiderLogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
      <Link className='logo-link' to='/'><img src={astrosLogo} className='logolink-img'/></Link>
      <Link className='logo-link' to='/'><img src={astrosInsiderLogo} className='logolink-img'/></Link>
      <div>
        <button className='nav-button'>
          Roster
        </button>
        <button className='nav-button'>
          Schedule
        </button>
      </div>
    </div>
  );
}

export default NavBar;