sayHelloBye = (name, num) => {
  return num === 1 ?
  'Hello ' + name[0].toUpperCase() + name.slice(1):
  'Bye ' + name[0].toUpperCase() + name.slice(1); 
}

const name = "alon"
const num = 1;

document.getElementById('ans').textContent = sayHelloBye(name, num);