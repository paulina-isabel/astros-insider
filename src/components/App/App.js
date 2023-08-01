import './App.css';
import NavBar from '../NavBar/NavBar';
import Games from '../Games/Games';
import getData from '../.././apiCalls/apiCalls';
import { cleanScheduleData } from '../../helperFunctions';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [scheduleData, setScheduleData] = useState([])

  useEffect(() => {
    getData()
      .then(data => 
        setScheduleData(data.body.schedule)
        )
  }, []) 

console.log(scheduleData)



  return (
    <div className="App">
      <NavBar />
      <div className='background-image-container'>
        <Games scheduleData={scheduleData}/>
      </div>
    </div>
  );
}

export default App;