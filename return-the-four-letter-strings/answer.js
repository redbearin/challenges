isFourLetters = arr => JSON.stringify(arr.filter((ele) => ele.length === 4));

const arr = ["Tomato", "Potato", "Pair"];

document.getElementById('ans').textContent = isFourLetters(arr);