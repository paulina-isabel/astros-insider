import './NavBar.css';
import astrosLogo from '../../images/astrosLogo.png';
import astrosInsiderLogo from '../../images/astrosInsiderLogo.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className='nav'>
      <div className='logo-container'>
        <Link className='logo-link' to='/'><img src={astrosLogo} className='logolink-img' alt='home link'/></Link>
        <Link className='logo-link' to='/'><img src={astrosInsiderLogo} className='logolink-img' alt='home link'/></Link>
      </div>

      <div className='nav-button-wrapper'>
        <Link to='/schedule'>
          <button className='nav-button' id='schedule-button'>
            View Full Schedule
          </button>
        </Link>
        <Link to='/roster'>
          <button className='nav-button' id='roster-button'>
            View Current Roster
          </button>
        </Link>
        <Link to='/favorites'>
          <button className='nav-button' id='favorites-button'>
            View Your Favorites
          </button>
        </Link>
      </div>

      <div className='language-toggle'>
        <p>{language === 'en' ? 'Hello' : 'Hola'}</p>
        <button onClick={toggleLanguage}>{language === 'en' ? 'español' : 'english'}</button>
      </div>
    </div>
  );
};

export default NavBar;