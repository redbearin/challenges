skipTooMuchSugarDrinks = arr => JSON.stringify(arr.filter((ele) => ele !== "fanta" && ele !== "cola"));

const arr = ["fanta", "cola", "water"];

document.getElementById('ans').textContent = skipTooMuchSugarDrinks(arr);