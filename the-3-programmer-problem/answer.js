programmers = (one, two, three) => Math.max(one, two, three) - Math.min(one, two, three);

const one = 147;
const two = 33;
const three = 526;

document.getElementById('ans').textContent = programmers(one, two, three);