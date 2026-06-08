rogerShots = shots => {
  shots.sort();
  let time = 0;
  let bottles = 0;
  for (let i = shots.length - 1; i >= 0; i--) {
    if (shots[i] === "BangBang!") {
      bottles += 2;
      time += .5;
    }
    if (shots[i] === "Bang!") {
      bottles += 1;
      time += .5;
    }
    if (bottles === 6) {
      break;
    }
  }
  return time;
}

const shots = ["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"];

document.getElementById('ans').textContent = rogerShots(shots);