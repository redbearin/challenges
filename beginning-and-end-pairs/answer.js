pairs = arr => {
  pairs = arr => {
    const pairs = [];
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
      pairs.push([arr[i], arr[arr.length - (i+1)]])
    }
    if (arr.length % 2) {
          pairs.push([arr[Math.floor(arr.length/2)],arr[Math.floor(arr.length/2)]]); 
    }
  return JSON.stringify(final);  
}

const arr = [5, 9, 8, 1, 2];

document.getElementById('ans').textContent = pairs(arr);