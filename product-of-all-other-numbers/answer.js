getProducts = arr => {
  let product;
  const prodArr = [];
  for (let i = 0; i < arr.length; i++) {
    product = 1;
    for (let j = 0; j < arr.length; j++)
    if (j !== i) {
      product *= arr[j];
    }
    prodArr.push(product);
  }
  return JSON.stringify(prodArr);
}

const arr = [1, 7, 3, 4];

document.getElementById('ans').textContent = getProducts(arr);