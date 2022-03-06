birdCode = ([bird1, bird2])=> {
  const bird1Arr = bird1.split(/ |-/);
  const bird2Arr = bird2.split(/ |-/);
  const abbrev = []

  if (bird1Arr.length === 4)
    abbrev.push(bird1Arr[0][0].toUpperCase() + bird1Arr[1][0].toUpperCase() + bird1Arr[2][0].toUpperCase() + bird1Arr[3][0].toUpperCase());
  if (bird1Arr.length === 3)
    abbrev.push(bird1Arr[0][0].toUpperCase() + bird1Arr[1][0].toUpperCase() + bird1Arr[2][0].toUpperCase() + bird1Arr[2][1].toUpperCase());
  if (bird1Arr.length === 2)
    abbrev.push(bird1Arr[0][0].toUpperCase() + bird1Arr[0][1].toUpperCase() + bird1Arr[1][0].toUpperCase() + bird1Arr[1][1].toUpperCase());
  else
    abbrev.push(bird1Arr[0][0].toUpperCase() + bird1Arr[0][1].toUpperCase() + bird1Arr[0][2].toUpperCase() + bird1Arr[0][3].toUpperCase());

  if (bird2Arr.length === 4)
    abbrev.push(bird2Arr[0][0].toUpperCase() + bird2Arr[1][0].toUpperCase() + bird2Arr[2][0].toUpperCase() + bird2Arr[3][0].toUpperCase());
  if (bird2Arr.length === 3)
    abbrev.push(bird2Arr[0][0].toUpperCase() + bird2Arr[1][0].toUpperCase() + bird2Arr[2][0].toUpperCase() + bird2Arr[2][1].toUpperCase());
  if (bird2Arr.length === 2)
    abbrev.push(bird2Arr[0][0].toUpperCase() + bird2Arr[0][1].toUpperCase() + bird2Arr[1][0].toUpperCase() + bird2Arr[1][1].toUpperCase());
  else
    abbrev.push(bird2Arr[0][0].toUpperCase() + bird2Arr[0][1].toUpperCase() + bird2Arr[0][2].toUpperCase() + bird2Arr[0][3].toUpperCase());

  return abbrev;
}
const bird1 = "Black-Capped Chickadee";
const bird2 = "Common Tern";

document.getElementById('ans').textContent = birdCode([bird1, bird2]) 