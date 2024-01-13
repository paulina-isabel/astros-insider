import './AstrosOffMessage.css';
import { useLanguage } from '../../context/LanguageContext';

const AstrosOffMessage = () => {
  const { language } = useLanguage();
  
  return (
    <div className='game-card'>
      <h2>
        {language === 'en' 
          ? 'The Astros are off today - check out the schedule page to see their upcoming games.' 
          : 'Los Astros descansan hoy - consulta la pagina del calendario para ver los siguientes juegos.'
        }
      </h2>
    </div>
  )
};

export default AstrosOffMessage;