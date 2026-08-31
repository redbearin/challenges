addName = (obj, name, val) => {
  obj[name] = val;
  return JSON.stringify(obj);
}

const obj = {};
const name = "Brutus";
const val = 300;

document.getElementById('ans').textContent = addName({}, "Brutus", 300) 