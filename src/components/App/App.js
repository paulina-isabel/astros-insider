import './App.css';
import NavBar from '../NavBar/NavBar';
import Games from '../Games/Games';
import Roster from '../Roster/Roster';
import NextGame from '../NextGame/NextGame';
import Loader from '../Loader/Loader';
import PlayerDetailCard from '../PlayerDetailCard/PlayerDetailCard';
import Favorites from '../Favorites/Favorites';
import EmptyState from '../EmptyState/EmptyState';
import getData from '../.././apiCalls/apiCalls';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fixKessingerHeadshot } from '../../helperFunctions';

const App = () => {

  const [scheduleData, setScheduleData] = useState([]);
  const [rosterData, setRosterData] = useState([]);
  const [scheduleLoading, setScheduleLoading] = useState(true);
  const [rosterLoading, setRosterLoading] = useState(true);
  const [favoritePlayers, setFavoritePlayers] = useState([]);
  const [error, setError] = useState(null);

  const scheduleEndpoint = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11';
  const rosterEndpoint = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamID=11';

  useEffect(() => {
    const apiCall = async() => {
      setScheduleLoading(true)
      try {
        const data = await getData(scheduleEndpoint)
        setScheduleData(data.body.schedule)
        setScheduleLoading(false)
      } catch(error) {
        if(error instanceof Error) {
          setError(error)
        }
        setScheduleLoading(false)
      }
    }
    apiCall()
  }, []);

  useEffect(() => {
    const apiCall = async() => {
      setRosterLoading(true)
      try {
        const data = await getData(rosterEndpoint)
        setRosterData(data.body.roster)
        console.log(rosterData, 'this is roster data')
        console.log(typeof rosterData[0].mlbID)
        setRosterLoading(false)
      } catch(error) {
        if(error instanceof Error) {
          setError(error)
        }
        setRosterLoading(false)
      }
    }
    apiCall()
  }, []);

  useEffect(() => {
    const storedFavoritePlayers = JSON.parse(window.localStorage.getItem('favoritePlayers'));
    if (storedFavoritePlayers) {
      setFavoritePlayers(storedFavoritePlayers);
    }
  }, []);

  const addToFavoritePlayers = (newPlayer) => {
    window.localStorage.setItem('favoritePlayers', JSON.stringify([...favoritePlayers, newPlayer]))
    setFavoritePlayers(JSON.parse(localStorage.favoritePlayers))
  };

  const removeFromFavoritePlayers = (player) => {
    const filteredPlayers = favoritePlayers.filter((favoritedPlayer) => {
      return favoritedPlayer.playerID !== player.playerID
    })
    window.localStorage.setItem('favoritePlayers', JSON.stringify(filteredPlayers))
    setFavoritePlayers(JSON.parse(localStorage.favoritePlayers))
  };

  const check = fixKessingerHeadshot(rosterData)
  console.log(check, 'check')

  return (
    <main>
      <NavBar />
      <div className='background-image-container'>
        {error ? <EmptyState errorMessage={error.message}/> :
          <Routes>
            <Route path='/' element={scheduleLoading ? <Loader /> : <NextGame scheduleData={scheduleData}/>}/>            
            <Route path='/schedule' element={scheduleLoading ? <Loader /> : <Games scheduleData={scheduleData}/>}/>            
            <Route path='/roster' element={rosterLoading ? <Loader /> : <Roster rosterData={rosterData}/>}/>            
            <Route path='/roster/:id' element={rosterLoading ? <Loader /> : <PlayerDetailCard rosterData={rosterData} favoritePlayers={favoritePlayers} addToFavoritePlayers={addToFavoritePlayers} removeFromFavoritePlayers={removeFromFavoritePlayers}/>}/>            
            <Route path='/favorites' element={rosterLoading? <Loader /> : <Favorites favoritePlayers={favoritePlayers}/>}/>
            <Route path='/*' element={<EmptyState errorMessage={'Nothing to see here, please go back'}/>} />
          </Routes>
        }
      </div>
    </main>
  );
};

export default App;