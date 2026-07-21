function lostDog() {
  let dog;
  let dogCount = 0;
  const lostDogs = {};
  for(let i = 0; i < arguments.length; i++) {
    for(let j = 0; j < arguments[i].length; j++) 
    {
      if (arguments[i][j] === 0) {
        dogCount++;
        dog = "Dog" + dogCount;
        lostDogs[dog] = "House (" + (i + 1) + ") and Room (" + (j + 1) + ")";
        break;
      }
    } 
  }
  if (Object.keys(lostDogs).length === 0) {
    return "Dog not found!";
  }
  return JSON.stringify(lostDogs);
}


document.getElementById('ans').textContent = lostDog([1, 1, 1, 1, 1, 0],  [0, 1, 1, 1, 1, 1],  [1, 0, 1, 1, 1, 1],  [1, 1, 0, 1, 1, 1]);