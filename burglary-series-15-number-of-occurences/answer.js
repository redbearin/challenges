countNumberOfOccurrences = obj => {
  const adjCounts = {};
  for (key in obj) {
    if (adjCounts[obj[key]]) 
      adjCounts[obj[key]] = adjCounts[obj[key]] + 1;
    else 
     adjCounts[obj[key]] = 1;
  }
  return JSON.stringify(adjCounts);
}

const obj = {
  a: "idiot",
  b: "scumbag"
};

document.getElementById('ans').textContent = countNumberOfOccurrences(obj);