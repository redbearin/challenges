amazingEdabit = str => str.includes('edabit') ? str : str.replace('amazing', 'not amazing');

const str = "Mubashir is amazing.";

document.getElementById('ans').textContent = amazingEdabit(str);