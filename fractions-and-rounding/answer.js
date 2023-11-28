fracRound = (strFraction, places) => {
  const strFracArr = strFraction.split('/');
  return (strFracArr[0] / strFracArr[1]).toFixed(places);
}

const strFraction = "22/7";
const places = 2;

document.getElementById('ans').textContent = fracRound(strFraction, places);