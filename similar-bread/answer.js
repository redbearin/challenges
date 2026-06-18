hasSameBread = (sand1, sand2) => sand1[0] === sand2[0] && sand1[2] === sand2[2];

const sand1 =   ["white bread", "lettuce", "white bread"];
const sand2 =   ["white bread", "tomato", "white bread"];

document.getElementById('ans').textContent = hasSameBread(sand1, sand2);