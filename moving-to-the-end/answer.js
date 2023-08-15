const moveToEnd = (arr, element) => {
  const end = [];
  const begin = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) 
      end.push(arr[i]);
    else  
      begin.push(arr[i]);
  }
  return JSON.stringify(begin.concat(end));
};

const arr = [1, 3, 2, 4, 4, 1];
const element = 1;

document.getElementById('ans').textContent = moveToEnd(arr, element);