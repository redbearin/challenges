superheroes = arr => {
  const manEndings = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].toLowerCase();
    console.log(word)
    if (/(woman)\b/.test(word))  
      continue;
    if (/(man)\b/.test(word)) 
      manEndings.push(arr[i])
  }
  return JSON.stringify(manEndings.sort());
}

const arr = ["Wonder-Woman", "Catwoman", "Invisible-Woman"];

document.getElementById('ans').textContent = superheroes(arr);
