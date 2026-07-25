acceptIntoMovie = (age, isSupervised) => age >= 15 || isSupervised === true;

const age = 16;
const isSupervised = false;

document.getElementById('ans').textContent = acceptIntoMovie(age, isSupervised);