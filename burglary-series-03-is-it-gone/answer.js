findIt = (obj, name) => {
  return obj[name] ? 
  name[0].toUpperCase() + name.slice(1) + " is gone..." :
  name[0].toUpperCase() + name.slice(1) + " is here!";
}

const obj = {
  tv: 30,
  timmy: 20,
  stereo: 50,
};
const name =  'timmy';

document.getElementById('ans').textContent = findIt(obj, name);