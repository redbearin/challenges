countNumberOfOccurrences = obj => {
  const counts = {};
  for (key in obj) {
    counts[obj[key]] ?
      counts[obj[key]] += 1 : 
      counts[obj[key]] = 1;
  }
  return JSON.stringify(counts);
}

const obj = {
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
};

document.getElementById('ans').textContent = countNumberOfOccurrences(obj);