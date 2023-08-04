import './App.css';
import NavBar from '../NavBar/NavBar';
import Games from '../Games/Games';
import Roster from '../Roster/Roster';
import NextGame from '../NextGame/NextGame';
import Loader from '../Loader/Loader';
import PlayerDetailCard from '../PlayerDetailCard/PlayerDetailCard';
import Favorites from '../Favorites/Favorites';
import getData from '../.././apiCalls/apiCalls';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [scheduleData, setScheduleData] = useState([])
  const [rosterData, setRosterData] = useState([])
  const [scheduleLoading, setScheduleLoading] = useState(true)
  const [rosterLoading, setRosterLoading] = useState(true)
  const [favoritePlayers, setFavoritePlayers] = useState([])

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
        setScheduleLoading(false)
      }
    )
  }, [])

  const addToFavoritePlayers = (newPlayer) => {
    window.localStorage.setItem('favoritePlayers', JSON.stringify([...favoritePlayers, newPlayer]))
    setFavoritePlayers(JSON.parse(localStorage.favoritePlayers))
  }

  const removeFromFavoritePlayers = (player) => {
    const filteredPlayers = favoritePlayers.filter((favoritedPlayer) => {
      return favoritedPlayer.id !== player.id
    })
    console.log(filteredPlayers, 'fil plays in remove from favs')

    window.localStorage.setItem('favoritePlayers', JSON.stringify(filteredPlayers))

    setFavoritePlayers(JSON.parse(localStorage.favoritePlayers))
  }

  return (
    <div className="App">
      <NavBar />
      <div className='background-image-container'>
        <Routes>
          
          <Route path='/' element={scheduleLoading ? <Loader /> : <NextGame scheduleData={scheduleData}/>}/>
          
          <Route path='/schedule' element={scheduleLoading ? <Loader /> : <Games scheduleData={scheduleData}/>}/>
          
          <Route path='/roster' element={rosterLoading ? <Loader /> : <Roster rosterData={rosterData}/>}/>
          
          <Route path='/roster/:id' element={rosterLoading ? <Loader /> : <PlayerDetailCard rosterData={rosterData} favoritePlayers={favoritePlayers} addToFavoritePlayers={addToFavoritePlayers} removeFromFavoritePlayers={removeFromFavoritePlayers}/>}/>
          
          <Route path='/favorites' element={<Favorites favoritePlayers={favoritePlayers}/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;