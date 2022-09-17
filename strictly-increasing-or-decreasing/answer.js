check = arr => {
  let inc = false;
  let dec = false;
  if (arr[1] > arr[0]) {
    console.log('inside')
    inc = true;
    console.log('inc')
  }
  else if (arr[1] < arr[0]) {
    dec = true;
  }
  else {
    console.log('inside else')
    return 'neither';
  }
  console.log(inc)
  console.log(dec)
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > arr[i-1] && !inc || 
        arr[i] < arr[i-1] && !dec) { 
      return 'neither';
    }
  }
  if (inc)
    return 'increasing';
  else 
    return 'decreasing';
}
const arr = [1, 2, 3];

document.getElementById('ans').textContent = check(arr);