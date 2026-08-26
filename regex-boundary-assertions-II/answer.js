accepted = words => JSON.stringify(words.filter(ele => ele[0] !== "C"));

const words = ["Cans", "Worms", "Bugs", "Cold", "Beans"];

document.getElementById('ans').textContent = accepted(words);