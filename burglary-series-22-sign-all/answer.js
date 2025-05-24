signAll = (obj, name) => {
  for (let key in obj)  {
    obj[key].signature = name;
  }
  obj.signature = name;
  return JSON.stringify(obj);
}

const obj = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: "",
  },
  bathroom: {
    stereo: 220,
    signature: "",
  },
  signature: "",
};

const name = "Rocky";

document.getElementById('ans').textContent = signAll(obj, name);