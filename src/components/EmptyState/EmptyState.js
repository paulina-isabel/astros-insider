import './EmptyState.css';
import PropTypes from 'prop-types';

const EmptyState = ({ errorMessage }) => {
  return (
    <div className="error-message-container">
      <h2 className="error-message">{errorMessage.includes('Failed') ? 'Error 500 -- Please try again' : errorMessage}</h2>
    </div>
  )
};

EmptyState.propTypes = {
  errorMessage: PropTypes.string
};

export default EmptyState;