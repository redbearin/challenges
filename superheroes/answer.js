superheroes = arr => {
  const superChars = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(-3) === 'man' || arr[i].slice(-3) === 'Man') {
      if (arr[i].slice(-5) !== 'woman' && arr[i].slice(-5) !== 'Woman') {
        superChars.push(arr[i]);
      }
    }
  }
  return JSON.stringify(superChars.sort());
}

const arr = ["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"];

document.getElementById('ans').textContent = superheroes(arr);