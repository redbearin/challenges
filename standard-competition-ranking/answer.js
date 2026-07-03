competitionRank = (obj, person) => {
  const counts = {};
  for (key in obj) {
    counts[obj[key]] ?
    counts[obj[key]]++ :
    counts[obj[key]] = 1;
  }
  const countsArr = Object.entries(counts).sort((a,b) => +b[0] - +a[0]);
  const scoreArr = [];
  for (let i = 0; i < countsArr.length; i++) {
    scoreArr.push(+countsArr[i][0]);
  }
  const idx = scoreArr.findIndex(ele => ele === +obj[person]);
  let rank = 0;
  for (let i = 0; i < idx; i++) {
    rank += countsArr[i][1];
  }
  return rank + 1;
}


obj = {Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87};
  
  const person = "Ellie";

  document.getElementById('ans').textContent = competitionRank(obj, person);