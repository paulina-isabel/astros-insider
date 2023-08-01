const getData = () => {
  const url = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11'
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'X-RapidAPI-Key': 'bc9c0e8e5fmshb0c38a31a8522adp1e5430jsn80040d7c0eb8'
    }
  })
    .then(response => response.json())
}

export default getData