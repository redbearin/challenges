timeSaved = (sdLimit, avgSpeed, disTravel) => {
  return Math.round((disTravel/sdLimit - disTravel/avgSpeed) * 60 * 10)/10;
}

const sdLimit = 80
const avgSpeed = 90
const disTravel = 40

document.getElementById('ans').textContent = timeSaved(sdLimit, avgSpeed, disTravel);
