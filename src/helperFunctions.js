const correctLastGameDate = (date) => {
  const year = date.slice(0,4);
  const month = date.slice(4,6);
  const newDate = date.slice(6, 8);
  const location = date.slice(9);
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  };
  return `${months[month]} ${newDate} ${year} ${location}`;
}

const correctGamesDate = (date) => {
  const year = date.slice(0,4);
  const month = date.slice(4,6);
  const newDate = date.slice(6);
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  };
  return `${months[month]} ${newDate}, ${year}`;
}

export {correctGamesDate, correctLastGameDate}