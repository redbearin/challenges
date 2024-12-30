mostExpensiveItem = items => {
  return Object.entries(items).sort((a,b) => b[1] - a[1])[0][0];
}

const items = {
  tv: 30,
  skate: 20,
  stereo: 50,
};

document.getElementById('ans').textContent = mostExpensiveItem(items);