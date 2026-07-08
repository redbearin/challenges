shouldServeDrinks = (age, onBreak) => age >= 18 && onBreak === false;

const age = 17
const onBreak = true;

document.getElementById('ans').textContent = shouldServeDrinks(age, onBreak);