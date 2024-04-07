accumulatingProduct = arr => {
  const newArr = [];
  arr.reduce((acc, ele) => {
    acc = acc * ele;
    newArr.push(acc);
    return acc;
  },1);
  return JSON.stringify(newArr);
}

const arr = [1, 5, 7];

document.getElementById('ans').textContent = accumulatingProduct(arr);