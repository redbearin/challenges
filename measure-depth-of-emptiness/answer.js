measureDepth = arr => {
  const str = JSON.stringify(arr);
  return str.split('').length/2;
}

const arr = [[[[[[[[[[[]]]]]]]]]]];

document.getElementById('ans').textContent = measureDepth(arr);