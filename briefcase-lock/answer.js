minTurns = (start, end) => {
  let minTurns = 0;
  let forward, backward;

  for (let i = 0; i < 4; i++) {
    forward = 0;
    backward = 0;
    if (+end[i] > +start[i]) {
      forward = +end[i] - +start[i];
      backward = +start[i] + 10 - +end[i];
    }
    else {
      forward = 10 - +start[i] + +end[i];
      backward = +start[i] - +end[i];
    }

    forward < backward ?
      minTurns += forward :
      minTurns += backward;
  }

  return minTurns;
}

const start = "1111";
const end = "1100";

document.getElementById('ans').textContent = minTurns(start, end);
