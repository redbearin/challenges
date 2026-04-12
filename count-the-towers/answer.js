countTowers = arr => {
  return arr[arr.length -1][0].split('   ').length;
}

const arr = [
  ["                         ##"],
  ["##             ##   ##   ##"],
  ["##        ##   ##   ##   ##"],
  ["##   ##   ##   ##   ##   ##"]
];

document.getElementById('ans').textContent = countTowers(arr); 

