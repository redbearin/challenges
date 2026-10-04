const getSelectedReadings = readings => {
  const [first, ,third, ,fifth] = readings;
  return JSON.stringify({first, third, fifth});
};

const readings = [21, 24, 19, 26, 23];

document.getElementById('ans').textContent = getSelectedReadings(readings);