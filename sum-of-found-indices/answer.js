const sumFoundIndices = (arr, num) => {
  let sumIndices = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num)
      sumIndices += i;
  }
  return sumIndices;
};

const arr = [5, 10, 15, 20];
const num = 2;

document.getElementById('ans').textContent = sumFoundIndices(arr, num);