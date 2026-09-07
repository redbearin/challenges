getXP = obj => {
  const pts = {'Very Easy':	5, Easy: 10, Medium: 20, Hard: 40, 'Very Hard':	80};
  let sum = 0;
  for (key in obj) {
    sum += pts[key] * obj[key]
  }
  return sum + 'XP';
}


const obj = {
  "Very Easy" : 254,
  "Easy" : 32,
  "Medium" : 65,
  "Hard" : 51,
  "Very Hard" : 34
};

document.getElementById('ans').textContent = getXP(obj);


