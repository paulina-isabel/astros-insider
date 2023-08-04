import './EmptyState.css'

const EmptyState = ({ errorMessage }) => {
  return (
    <div className="error-message-container">
      <h2 className="error-message">{errorMessage.includes('Failed') ? 'Error 500 -- Please try again' : errorMessage}</h2>
    </div>
  )
}

export default EmptyState