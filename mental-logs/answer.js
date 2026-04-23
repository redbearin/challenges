mentalLogs = arr => {
  let strNum = '2';
  for (let i = 0; i < arr.length; i++) {
    strNum += (arr[i].toString())[2];
  }
  return +strNum - 2; 
}

const arr = [7593, 5687, 4628, 9485];

document.getElementById('ans').textContent = mentalLogs(arr);