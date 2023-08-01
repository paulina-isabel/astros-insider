const handleError = (response) => {
  if(!response.ok) {
    throw new Error(`Error: ${response.status} -- Please refresh the page.`)
  }
  return response.json()
}

const getData = async() => {
  const url = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11'
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc9c0e8e5fmshb0c38a31a8522adp1e5430jsn80040d7c0eb8',
      'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
    }
  })
  const data = await handleError(response)
  return data
}

export default getData