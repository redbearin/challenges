avgSpd = (timeUphillMin, speedUp, speedDown) => {
  const timeUphillHrs = timeUphillMin / 60;
  const dist = timeUphillHrs * speedUp;
  const timeDownhillHrs = dist / speedDown;
  return dist * 2 / (timeUphillHrs + timeDownhillHrs);
}

const timeUphillMin = 30; // minutes uphill
const speedUp = 8; //speed up in mph
const speedDown = 24; //speed down iin mph

document.getElementById('ans').textContent = avgSpd(timeUphillMin, speedUp, speedDown);
