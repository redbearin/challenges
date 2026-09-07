letsMeet = (d, v1, v2) => {
  const t = d / (v1 + v2)
  const hrs = Math.floor(t);
  const rem = (t - hrs) * 60;
  const min = Math.floor(rem);
  const sec = Math.floor((rem-min) * 60);
  return hrs +'h ' + min + 'min ' + sec + 's';
}

const d = 100;
const v1 = 10;
const v2 = 30;

document.getElementById('ans').textContent = letsMeet(d, v1, v2); 