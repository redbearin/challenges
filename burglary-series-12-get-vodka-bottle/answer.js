getVodkaBottle = (obj, num) => {
  for (key in obj) {
    if (key.includes('Rammstein') && obj[key] === num) {
      return key;
    }
  }
}

const obj = { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 };
const num = 100;

document.getElementById('ans').textContent = getVodkaBottle(obj, num);