const handleError = (response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  };
  return response.json();
};

const getData = async(url) => {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc9c0e8e5fmshb0c38a31a8522adp1e5430jsn80040d7c0eb8',
      'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
    }
  });
  let data = await handleError(response);
  return data;
};

export default getData;