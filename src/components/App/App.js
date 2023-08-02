import './App.css';
import NavBar from '../NavBar/NavBar';
import Games from '../Games/Games';
import Roster from '../Roster/Roster';
import getData from '../.././apiCalls/apiCalls';
import { cleanScheduleData } from '../../helperFunctions';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [scheduleData, setScheduleData] = useState([])
  
  const scheduleEndpoint = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11'
  const rosterEndpoint = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamID=11'

  useEffect(() => {
    getData(scheduleEndpoint)
      .then(data => 
        setScheduleData(data.body.schedule)
      )
  }, []) 

  console.log(scheduleData, 'schedule data')

  return (
    <div className="App">
      <div className='background-image-container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Games scheduleData={scheduleData}/>}/>
          {/* <Route path='/roster' element={<Roster />}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;