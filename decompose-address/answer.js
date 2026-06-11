decomposeAddress = str => {
  const strArr = str.split(', ');
  const first = strArr[0].split(' ');
  const second = strArr[1].split(' ');
  const city = [];
  for (let i = 3; i < first.length; i++) {
    city.push(first[i]);
  }
  return JSON.stringify([first[0], first[1] + ' ' + first[2], city.join(' ').trim(), second[0], second[1]]);
}

const str = "557 Farmer Rd Corner, MT 59105";

document.getElementById('ans').textContent = decomposeAddress(str);

