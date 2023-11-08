filterValues = obj => {
  const newObj = {};
  for (item in obj) {
    if (obj[item] >= 5000) {
      newObj[item] = obj[item];
    }
  }
  return JSON.stringify(newObj);
}

const obj = { tv: 4999, guitar:5000, fork: 5001 };

document.getElementById('ans').textContent = filterValues(obj);