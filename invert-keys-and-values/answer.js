invert = obj => {
  const newObj = {};
  for (key in obj) {
    newObj[obj[key]] = key;
  }
  return JSON.stringify(newObj);
}

const obj = { "zebra": "koala", "horse": "camel" };

document.getElementById('ans').textContent = invert(obj);