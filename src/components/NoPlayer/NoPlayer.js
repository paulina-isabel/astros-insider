import './NoPlayer.css';
import { useLanguage } from '../../context/LanguageContext';

const NoPlayer = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h2>{language === 'en'
        ? 'No players found, please try again'
        : 'No se encontraron jugadores, por favor intenta de nuevo.'
      }</h2>
    </div>
  )
};

export default NoPlayer;