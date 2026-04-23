getVodkaBottle = (obj, num) => {
  const objArr = Object.entries(obj);
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i][0].includes("Rammstein") && objArr[i][1] === num) {
      return objArr[i][0];
    }
  }
}

const obj = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 };
const num = 100;

document.getElementById('ans').textContent = getVodkaBottle(obj, num);