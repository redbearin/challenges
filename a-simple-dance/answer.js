dance = (arr, gender) => {
  let names = [];
  let x = 1;
  if (gender === 'women') {
    x = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i][x]);
  }
  names = names.reverse();
  for (let i = 0; i < arr.length; i++) {
    arr[i][x] = names[i];
  }
  return JSON.stringify(arr);
}

const arr = [
  ['Ana', 'Bob'],
  ['Amy', 'Josh'],
  ['Lisa', 'Tim']
];
const gender = 'women';

document.getElementById('ans').textContent = dance(arr, gender);