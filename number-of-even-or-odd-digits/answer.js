countDigits = (arr, type) => {
  const counts = [];
  let strNum, count;
  for (let i = 0; i < arr.length; i++) {
    strNum = arr[i].toString();
    count = 0;
    if (type === "odd") {
      for (let j = 0; j < strNum.length; j++) {
        if (+strNum[j] % 2) {
          count++;
        }
      }
    }
    else {
      for (let j = 0; j < strNum.length; j++) {
        if (+strNum[j] % 2 === 0) {
          count++;
        }
      }
    }
    counts.push(count);
  }
  return JSON.stringify(counts);
}

const arr = [22, 53, 99, 61, 777, 8];
const type = "odd";

document.getElementById('ans').textContent = countDigits(arr, type);