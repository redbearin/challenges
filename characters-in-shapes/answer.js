countCharacters = arr => arr.reduce((acc, ele) => ele.length + acc,0);

const arr = [
  "###",
  "###",
  "###"
];

document.getElementById('ans').textContent = countCharacters(arr);