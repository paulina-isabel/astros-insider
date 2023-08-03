import './Loader.css'
import loading from '../../images/loading.png'
import airYordan from '../../images/air-yordan.png'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loading} className='loader-logo' alt='loading page image'/>
      <img src={airYordan} className='loader-yordan' alt='loader page yordan image'/>
    </div>
  )
}

export default Loader