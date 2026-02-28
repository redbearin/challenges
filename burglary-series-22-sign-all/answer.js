signAll = (obj, person) => {
  for (key in obj) {
    if (key === 'signature') {
      obj[key] = person;
    }
    else {
      for (inkey in obj[key]) {
        if (inkey === "signature") {
          obj[key][inkey] = person;
        }
      }
    }
  }
  return JSON.stringify(obj)
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

const person = "Rocky";

document.getElementById('ans').textContent = signAll(obj, person);