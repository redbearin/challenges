mostExpensive = jewelry => {
  return 'The most expensive one is the ' + 
          Object.entries(jewelry).sort((a, b) => b[1] - a[1])[0][0];
}

const jewelry = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650

document.getElementById('ans').textContent = mostExpensive(jewelry);