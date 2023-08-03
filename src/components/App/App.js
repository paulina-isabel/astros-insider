import './App.css';
import NavBar from '../NavBar/NavBar';
import Games from '../Games/Games';
import Roster from '../Roster/Roster';
import NextGame from '../NextGame/NextGame';
import Loader from '../Loader/Loader';
import getData from '../.././apiCalls/apiCalls';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [scheduleData, setScheduleData] = useState([])
  const [rosterData, setRosterData] = useState([])
  const [scheduleLoading, setScheduleLoading] = useState(true)
  const [rosterLoading, setRosterLoading] = useState(true)

  const scheduleEndpoint = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11'
  const rosterEndpoint = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamID=11'

  useEffect(() => {
    getData(rosterEndpoint)
    .then(data => {
        setRosterData(data.body.roster)
        setRosterLoading(false)
      }
    )
  }, [])  

  useEffect(() => {
    getData(scheduleEndpoint)
      .then(data => {
        setScheduleData(data.body.schedule)
        // setScheduleLoading(false)
      }
    )
  }, []) 

  console.log(scheduleData, 'schedule data')

  return (
    <div className="App">
        <NavBar />
      <div className='background-image-container'>
        <Routes>
          <Route path='/' element={scheduleLoading ? <Loader /> : <NextGame scheduleData={scheduleData}/>}/>
          <Route path='/schedule' element={<Games scheduleData={scheduleData}/>}/>
          <Route path='/roster' element={<Roster rosterData={rosterData}/>}/>
          <Route path='/player:id' element={<Roster rosterData={rosterData}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;