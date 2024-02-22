import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const EmptyState = ({ errorMessage }) => {
  const { language } = useLanguage();

  return (
    <div className="error-message-container">
      <h2 className="error-message">
          {language === 'en' 
          ? `An error: ${errorMessage} occurred -- please refresh the page` 
          : `Ocurrio un error nivel ${errorMessage} -- por favor actualiza la pagina`}
        </h2>
    </div>
  )
};

EmptyState.propTypes = {
  errorMessage: PropTypes.string
};

export default EmptyState;