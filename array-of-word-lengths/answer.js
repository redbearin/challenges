wordLengths = arr => JSON.stringify(arr.map(ele => ele.length));

const arr = ["hello", "world"];

document.getElementById('ans').textContent = wordLengths(arr);