javelinThrow = (vel, angle) => {
  return 'Ymax=' + 
		Math.round(Math.pow(vel, 2) * Math.pow(Math.sin(angle * Math.PI / 180), 2) / (2 * 9.81)) + 
		'm, Xmax=' + 
		Math.round(Math.pow(vel, 2) * Math.sin(2* angle * Math.PI / 180) / 9.81) + 
		'm';
}

const vel = 36.7;
const angle = 45;

document.getElementById('ans').textContent = javelinThrow(vel, angle);